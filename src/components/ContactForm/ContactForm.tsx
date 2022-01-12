import { useState, useEffect, ChangeEventHandler, SyntheticEvent } from 'react'
import styles from './ContactForm.module.scss'
import { Button } from 'components'

type FormData = {
  [key: string]: string
}

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = (formData: FormData) => {
    const formErrors = { name: '', email: '', message: '' }
    if (!formData.name) {
      formErrors.name = 'Name is required'
    }
    if (!formData.name) {
      formErrors.email = 'Email is required'
    }
    if (!formData.name) {
      formErrors.message = 'Message is required'
    }
    return formErrors
  }

  const handleChange: ChangeEventHandler<
    HTMLInputElement & HTMLTextAreaElement
  > = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    setErrors(validate(formData))
    setIsSubmitted(true)
  }

  function encode(data: FormData) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitted) {
      setIsLoading(true)
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'contact', ...formData }),
      })
        .then(() => alert('Success!'))
        .then(() => setIsSubmitted(false))
        .then(() => setFormData({ name: '', email: '', message: '' }))
        .catch((error) => alert(error))
      setIsLoading(false)
    }
  }, [errors, formData, isSubmitted])

  return (
    <form
      name="contact"
      method="POST"
      autoComplete="false"
      onSubmit={handleSubmit}
      data-netlify="true"
      data-netlify-recaptcha="true"
    >
      <input
        className={styles.FormInput}
        type="hidden"
        name="form-name"
        value="contact"
      />
      <div className={styles.FormField}>
        <input
          className={styles.FormInput}
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div className={styles.FormField}>
        <input
          className={styles.FormInput}
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div className={styles.FormField}>
        <textarea
          className={styles.FormInput}
          placeholder="Message"
          name="message"
          id=""
          cols={30}
          rows={7}
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p>{errors.message}</p>}
      </div>
      <div className={styles.FormField}>
        <div data-netlify-recaptcha="true"></div>
      </div>
      <div className={styles.FormField}>
        <Button isLoading={isLoading} fullwidth type="submit">
          HIT ME UP
        </Button>
      </div>
    </form>
  )
}

export default ContactForm

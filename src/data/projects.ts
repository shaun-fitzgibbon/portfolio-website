import { Skill } from 'data/skills'

export interface Project {
  id: number
  title: string
  technologies?: Pick<Skill, 'id' | 'name'>[]
  description: string
  imageUrl: string
  website: {
    name: string
    url: string
  }
  source: {
    name: string
    url: string
  }
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'George Lucas - Tribute Page',
    technologies: [
      {
        id: 1,
        name: 'HTML5',
      },
      {
        id: 2,
        name: 'CSS3',
      },
    ],
    description:
      'A tribute page designed and built for freecodecamp project. I chose to do this on George Lucas as I am a huge fan of the Star wars movies.',
    imageUrl: '/static/images/projects/george-lucas.png',
    website: {
      name: 'website',
      url: 'https://codepen.io/sfitzg/full/PopPeeb',
    },
    source: {
      name: 'source',
      url: 'https://codepen.io/sfitzg/pen/PopPeeb',
    },
  },
  {
    id: 2,
    title: 'Business - Survey Form',
    technologies: [
      {
        id: 1,
        name: 'HTML5',
      },
      { id: 2, name: 'CSS3' },
    ],
    description:
      'A basic survey form designed using figma and coded using html & css for freecodecamp project',
    imageUrl: '/static/images/projects/survey-form.png',
    website: {
      name: 'website',
      url: 'http://codepen.io/sfitzg/full/oNeLMNz',
    },
    source: {
      name: 'source',
      url: 'https://codepen.io/sfitzg/pen/oNeLMNz',
    },
  },
  {
    id: 3,
    title: 'George Lucas - Tribute Page',
    technologies: [
      {
        id: 1,
        name: 'HTML5',
      },
      { id: 2, name: 'CSS3' },
      { id: 3, name: 'dddd' },
    ],
    description: '',
    imageUrl: '/static/images/projects/george-lucas.png',
    website: {
      name: 'website',
      url: 'https://github.com/eddiejaoude',
    },
    source: {
      name: 'source',
      url: 'https://twitter.com/eddiejaoude',
    },
  },
]

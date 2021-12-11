export interface Project {
  id: number
  title: string
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

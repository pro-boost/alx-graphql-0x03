interface InfoProps {
    pages: number
    next: number
    prev: number
    count: number
}

export interface EpisodeProps {
  id: number
  name: string
  air_date: string
  episode: string
  info: InfoProps
}

export type EpisodeCardProps = Pick<EpisodeProps, 'id' | 'name'| 'air_date' | "episode">

export interface CharachterProps {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    image: string
}
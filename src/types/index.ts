type Stack = {
  name: string
  icon: string
  job: string
}

interface Contact {
  url?: string
  icon: string
  text: string
}

interface Social {
  url: string
  icon: string
  label: string
}

interface Profile {
  name: string
  image: string
  contacts: Contact[]
  socials: Social[]
}

interface Job {
  code: string
  value: string
  role: string
}

interface Project {
  name: string
  desc: string
  stack: string[]
  links: {
    live?: string
    github?: string
  }
}

interface Data {
  profile: Profile
  jobs: Job[]
  projects: Project[]
}

export type { Stack, Data, Contact, Social, Profile, Job, Project }


export type navItem = {
    label: string
    link: string
    className: string
    ref?: React.RefObject<HTMLAnchorElement>
}

export type aboutItem = {
    label: string
    number: number
}

export type skill = {
    imgSrc: string
    label: string
    desc: string
}

export type work = {
    imgSrc: string
    title: string
    tags: string[]
    projectLink: string
}

export type social = {
    href: string
    icon: string
    alt: string
}

export type socialLink = Omit<social, 'icon' | 'alt'> & {
    label: string
}

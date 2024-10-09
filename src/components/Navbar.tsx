import { useEffect, useRef } from "react";
import { navItem } from "../types";


type navOpenProps = {
    navOpen: boolean
}


export default function Navbar({ navOpen }: navOpenProps) {

    const lastActiveLink = useRef<HTMLAnchorElement | null>(null)
    const activeBox = useRef<HTMLDivElement>(null)

    const initActiveBox = () => {
        if (activeBox.current && lastActiveLink.current) {
            activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
            activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
            activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
            activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
        }
    }

    useEffect(initActiveBox, [])
    window.addEventListener('resize', initActiveBox)

    const activeCurrentLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
        lastActiveLink.current?.classList.remove('active');
        const target = event.target as HTMLAnchorElement;
        target.classList.add('active');
        lastActiveLink.current = target;

        if (activeBox.current && target) {
            activeBox.current.style.top = target.offsetTop + 'px';
            activeBox.current.style.left = target.offsetLeft + 'px';
            activeBox.current.style.width = target.offsetWidth + 'px';
            activeBox.current.style.height = target.offsetHeight + 'px';
        }

    }

    const navItems: navItem[] = [
        {
            label: 'Home',
            link: '#home',
            className: 'nav-link active',
            ref: lastActiveLink
        },
        {
            label: 'About',
            link: '#about',
            className: 'nav-link'
        },
        {
            label: 'Works',
            link: '#work',
            className: 'nav-link'
        },
        {
            label: 'Contact',
            link: '#contact',
            className: 'nav-link md:hidden'
        }
    ];

    return (
        <nav className={'navbar ' + (navOpen ? 'active' : '')}>
            {navItems.map((item, key) => (
                <a
                    key={key}
                    href={item.link}
                    ref={item.ref}
                    className={item.className}
                    onClick={activeCurrentLink}
                >
                    {item.label}
                </a>
            ))}
            <div
                className="active-box"
                ref={activeBox}
            ></div>
        </nav>
    )
}

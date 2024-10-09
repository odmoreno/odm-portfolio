/**
 * Primary Button
 */

type ButtonProps = {
    href?: string
    target?: React.HTMLAttributeAnchorTarget | undefined
    label: string
    icon: string
    classes?: string
}

const ButtonPrimary = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}: ButtonProps) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={"btn btn-primary " + classes}
            >
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-primary " + classes}>
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </button>
        )
    }
}

/**
 * Outline Button
 */

const ButtonOutline = ({
    href,
    target = '_self',
    label,
    icon,
    classes
}: ButtonProps) => {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={"btn btn-outline " + classes}
            >
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </a>
        )
    } else {
        return (
            <button className={"btn btn-outline " + classes}>
                {label}

                {icon ?
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                    : undefined
                }
            </button>
        )
    }
}

export {
    ButtonPrimary,
    ButtonOutline
}
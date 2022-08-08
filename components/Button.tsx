export type ButtonType =  "primary" | "secondary" | "accent" | "ghost" | "link";

function Button({ type, children, normalCase = true }: { type?: ButtonType, children?: React.ReactNode, normalCase?: boolean }) {
    let className = "btn";

    if (type)
        className += " btn-" + type;

    if (normalCase)
        className += " normal-case";
    
    return <button className={className}>{children}</button>
}

export default Button;
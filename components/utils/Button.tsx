export type Variant = "primary" | "secondary" | "accent" | "ghost" | "link";
export interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: Variant,
    children?: React.ReactNode
};

function Button({ variant, children, className, ...rest }: Props) {
    if (!className)
        className = "btn";
    else 
        className += " btn";

    if (variant) {
        const variantName = "btn-" + variant;
        className += " " + variantName;
    }

    return <button className={className} {...rest}>{children}</button>
}

export default Button;
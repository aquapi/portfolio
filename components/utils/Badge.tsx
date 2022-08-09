import redirect from "../../utils/redirect";

export interface Props {
    children?: React.ReactNode;
    href: string;
}

function Badge({ children, href }: Props) {
    return <div onClick={redirect(href, true)} className="cursor-pointer">{children}</div>;
}

export default Badge;
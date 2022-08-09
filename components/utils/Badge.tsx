import redirect from "../../utils/redirect";

export interface Props {
    children?: React.ReactNode;
    href: string;
}

function Badge({ children, href }: Props) {
    return <div onClick={redirect(href, true)}>{children}</div>;
}

export default Badge;
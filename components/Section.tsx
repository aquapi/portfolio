import styles from "../styles/components/Section.module.scss";

export type SectionType = "light" | "dark";

export interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type?: SectionType
}

function Section({ type, ...props }: Props) {
    let className = styles.wrapper;

    if (props.className) {
        className += " " + props.className;
        delete props.className;
    }

    if (type === "light") 
        className += " " + styles['content-light'];

    return <section className={className}>
        <div className={styles.content} {...props}></div>
    </section>;
}

export default Section;
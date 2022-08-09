import Button from "../components/utils/Button";
import styles from "../styles/components/Navbar.module.scss";
import redirect from "../utils/redirect";

function Navbar() {
    return <div className={styles.wrapper}>
        <div className={styles['flex-wrapper']}>
            <h4 className="font-extrabold cursor-pointer select-none" onClick={redirect("#intro")}>AquaPI</h4>
            <div>
                <Button variant="ghost" onClick={redirect("#about")}>About</Button>
                <Button variant="ghost" onClick={redirect("#projects")}>Projects</Button>
                <Button variant="ghost" onClick={redirect("https://github.com/aquapi", true)}>Github</Button>
            </div>
        </div>
    </div>;
}

export default Navbar;
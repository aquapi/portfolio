import styles from "../styles/components/Footer.module.scss";
import Badge from "./utils/Badge";

function svgProps(width: number, height?: number, viewWidth?: number, viewHeight?: number) {
    if (!height)
        height = width;

    return {
        xmlns: "http://www.w3.org/2000/svg",
        width: width,
        height: height,
        viewBox: `0 0 ${viewWidth || width} ${viewHeight || height}`
    }
}

function Footer() {
    return <footer className={styles.wrapper}>
        <div className={styles.left}>
            <svg fillRule="evenodd" clipRule="evenodd" {...svgProps(36, 36, 24, 24)}>
                <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
            </svg>
            <p>Designed by AquaPI - All right reserved</p>
        </div>
        <div className={styles.right}>
            <Badge href="https://www.youtube.com/channel/UC9N2d2Wr00oPnqmGg1MimYg">
                <svg {...svgProps(24)}>
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
            </Badge>
            <Badge href="https://www.facebook.com/profile.php?id=100076616664180">
                <svg {...svgProps(24)}>
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
            </Badge>
            <Badge href="https://discordapp.com/users/861500656682401822">
                <svg {...svgProps(24, 19)}>
                    <g>
                        <path d="M 20.046875 1.691406 C 18.570312 0.972656 16.980469 0.445312 15.320312 0.140625 C 15.289062 0.140625 15.261719 0.152344 15.246094 0.183594 C 15.042969 0.566406 14.816406 1.0625 14.65625 1.460938 C 12.871094 1.175781 11.097656 1.175781 9.347656 1.460938 C 9.1875 1.058594 8.953125 0.566406 8.75 0.183594 C 8.734375 0.15625 8.703125 0.140625 8.671875 0.140625 C 7.011719 0.445312 5.425781 0.972656 3.945312 1.691406 C 3.929688 1.699219 3.921875 1.707031 3.914062 1.71875 C 0.902344 6.46875 0.078125 11.105469 0.484375 15.683594 C 0.484375 15.703125 0.496094 15.726562 0.515625 15.738281 C 2.5 17.277344 4.425781 18.214844 6.3125 18.832031 C 6.339844 18.84375 6.375 18.832031 6.394531 18.804688 C 6.839844 18.160156 7.238281 17.480469 7.582031 16.765625 C 7.601562 16.726562 7.582031 16.675781 7.539062 16.660156 C 6.910156 16.40625 6.308594 16.097656 5.726562 15.746094 C 5.683594 15.71875 5.679688 15.652344 5.722656 15.617188 C 5.84375 15.519531 5.964844 15.421875 6.082031 15.320312 C 6.101562 15.300781 6.132812 15.296875 6.15625 15.308594 C 9.957031 17.140625 14.070312 17.140625 17.828125 15.308594 C 17.855469 15.296875 17.882812 15.300781 17.902344 15.320312 C 18.019531 15.417969 18.140625 15.519531 18.265625 15.617188 C 18.308594 15.652344 18.304688 15.71875 18.261719 15.746094 C 17.679688 16.105469 17.078125 16.40625 16.445312 16.660156 C 16.40625 16.675781 16.386719 16.726562 16.40625 16.765625 C 16.757812 17.480469 17.152344 18.160156 17.589844 18.804688 C 17.609375 18.832031 17.644531 18.84375 17.671875 18.832031 C 19.574219 18.214844 21.496094 17.277344 23.484375 15.738281 C 23.5 15.726562 23.511719 15.703125 23.511719 15.683594 C 23.996094 10.390625 22.703125 5.796875 20.078125 1.722656 C 20.070312 1.707031 20.0625 1.699219 20.046875 1.691406 Z M 8.148438 12.894531 C 7.003906 12.894531 6.058594 11.785156 6.058594 10.421875 C 6.058594 9.0625 6.984375 7.949219 8.148438 7.949219 C 9.320312 7.949219 10.253906 9.070312 10.238281 10.421875 C 10.238281 11.785156 9.3125 12.894531 8.148438 12.894531 Z M 15.863281 12.894531 C 14.722656 12.894531 13.777344 11.785156 13.777344 10.421875 C 13.777344 9.0625 14.703125 7.949219 15.863281 7.949219 C 17.039062 7.949219 17.972656 9.070312 17.953125 10.421875 C 17.953125 11.785156 17.039062 12.894531 15.863281 12.894531 Z M 15.863281 12.894531 " />
                    </g>
                </svg>
            </Badge>
        </div>
    </footer>

}

export default Footer;
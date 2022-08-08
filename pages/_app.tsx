import "../styles/app.scss";
import type { AppProps } from "next/app";
import Loader, { Context } from "../components/Loader";
import { useContext } from "react";

function App({ Component, pageProps }: AppProps) {
	const ctx = useContext(Context);
	ctx.addValue("btn-ghost");

	return <Loader>
		<Component {...pageProps} />
	</Loader>;
}

export default App;

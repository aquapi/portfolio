import "../styles/app.scss";
import type { AppProps } from "next/app";
import Loader, { Context } from "../components/utils/Loader";
import { useContext } from "react";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
	const ctx = useContext(Context);
	ctx.addValue("btn-ghost");

	return <>
	<Head>
		<title>AquaPI</title>
		<meta name="description" content="I'm AquaPI and this is my portfolio." />
	</Head>
		<Loader>
			<Component {...pageProps} />
		</Loader>
	</>;
}

export default App;

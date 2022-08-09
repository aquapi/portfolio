import type { NextPage } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import Reposity from "../components/utils/Reposity";
import styles from "../styles/pages/index.module.scss";

const Home: NextPage = () => {
	return <>
		<Navbar />
		<Section id="intro">
			<h1>Hi there!</h1>
			<p>Hi, welcome to my portfolio. I&apos;m Reve, a back-end developer. I can do front-end as well but I like back-end more &#128513;. Most of my works are in creating web games and libraries.</p>
		</Section>
		<Section type="light" id="about">
			<h1>About</h1>
			<p>
				I&apos;m Reve, a Back-end developer.
				I will not tell my real name as some already know it &#128513;.
				I started coding at twelve when I wanted to make a Minecraft mod. I still don&apos;t know how I got addicted to web development though &#128517;.
			</p>
		</Section>
		<Section id="projects" className="flex-row">
			<h1>Projects</h1>
			<p>These are some projects that I&apos;m working on. I make my own web framework as well &#128516;. I won&apos;t show my first framework here though as it is the worst thing I&apos;ve ever made.</p>
			<div className={styles['flex-content-wrapper']}>
				<Reposity name="server" org="pxe-js" />
				<Reposity name="dwc" />
			</div>
		</Section>
		<Footer />
	</>;
}

export default Home;

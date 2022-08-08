import type { NextPage } from "next";
import Button from "../components/Button";

const Home: NextPage = () => {
	return <div className="navbar bg-base-100 display-flex justify-between pl-4">
		<h2>AquaPI</h2>
		<div>
			<Button type="ghost">About</Button>
			<Button type="ghost">Projects</Button>
		</div>
	</div>;
}

export default Home;

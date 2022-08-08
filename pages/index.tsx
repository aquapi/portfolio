import type { NextPage } from "next";
import Button from "../components/Button";

const Home: NextPage = () => {
	return <div className="navbar bg-base-100 display-flex justify-between pl-4">
		<h3>AquaPI</h3>
		<div>
			<Button variant="ghost">About</Button>
			<Button variant="ghost">Projects</Button>
		</div>
	</div>;
}

export default Home;

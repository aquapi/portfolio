import Image from "next/image";
import redirect from "../../utils/redirect";

export type Props = {
    org?: string;
    name: string;
}

function Reposity({ org, name }: Props) {
    if (!org)
        org = "aquapi";

    return <div className="m-2">
        <Image
            src={`https://github-readme-stats.vercel.app/api/pin/?username=${org}&repo=${name}&theme=nord`}
            alt="Github stat"
            width="400"
            height="120"
            unoptimized={true}
            onClick={redirect(`https://github.com/${org}/${name}`, true)}
        />
    </div>;
}

export default Reposity;
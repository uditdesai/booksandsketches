import type { NextPage } from "next";
import Sanity from "../lib/config";
import { infoQuery } from "../lib/queries";

interface InfoProps {
  info: any;
}

const Info: NextPage<InfoProps> = ({ info }) => {
  return (
    <main className="Info w-100 min-h-screen px-4 md:px-8 pt-48 pb-8 bg-amber-400 grid">
      <h1 className="text-16 justify-self-end mr-24">{info.title}</h1>
      <p className="text-16 w-100 max-w-xl justify-self-start">
        {info.infoParagraph}
      </p>
    </main>
  );
};

export async function getStaticProps({ params }: any) {
  const info = await Sanity.fetch(infoQuery);

  return { props: { info } };
}

export default Info;

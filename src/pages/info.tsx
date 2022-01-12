import type { NextPage } from "next";
import Sanity from "../lib/config";
import { infoQuery } from "../lib/queries";

interface InfoProps {
  info: any;
}

const Info: NextPage<InfoProps> = ({ info }) => {
  return <div>{info.title}</div>;
};

export async function getStaticProps({ params }: any) {
  const info = await Sanity.fetch(infoQuery);

  return { props: { info } };
}

export default Info;

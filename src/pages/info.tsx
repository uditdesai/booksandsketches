import type { NextPage } from "next"
import { Sanity } from "../lib/config"
import { infoQuery } from "../lib/queries"
import BlockContent from "@sanity/block-content-to-react"

interface LinkProps {
  children: any
  mark: any
}

const Link: React.FC<LinkProps> = ({ children, mark }) => {
  if (!children) return null
  return (
    <a className="underline" href={mark?.link}>
      {children}
    </a>
  )
}

interface InfoProps {
  info: any
}

const Info: NextPage<InfoProps> = ({ info }) => {
  return (
    <main className="Info w-100 px-4 md:px-8 pt-24 xs:pt-36 md:pt-48 pb-8 flex flex-col items-center">
      <div className="w-[fit-content] grid grid-cols-1 gap-y-4 sm:grid-flow-col sm:auto-cols-max sm:gap-x-16 mb-12">
        <h1 className="sm:w-40 text-16 sm:justify-self-end sm:text-right">
          {info.title}
        </h1>
        <div className="text-16 w-100 max-w-[32rem]">
          <BlockContent blocks={info.infoParagraph} />
        </div>
      </div>
      <div className="w-[fit-content] grid grid-cols-1 gap-y-4 sm:grid-flow-col sm:auto-cols-max sm:gap-x-16">
        <h1 className="sm:w-40 text-16 sm:justify-self-end sm:text-right">
          {info.creditsTitle}
        </h1>
        <div className="text-16 w-100 max-w-[32rem]">
          <BlockContent
            blocks={info.creditsParagraph}
            serializers={{ marks: { link: Link } }}
          />
        </div>
      </div>
    </main>
  )
}

export async function getStaticProps({ params }: any) {
  const info = await Sanity.fetch(infoQuery)

  return { props: { info } }
}

export default Info

import { ReactNode } from "react"
import Hero, { HeroProps } from "./Hero"
import { SanityEntry } from "@/utils/sanity/client"
import RichText from "./RichText"

enum ComponentType {
  HERO_WITH_PICTURE = "heroWithPicture",
  RICH_TEXT = "richTextSection",
}

type SanityComponentProps = SanityEntry & HeroProps

const SanityComponent = ({ ...props }: SanityComponentProps) => {
  switch (props._type) {
    case ComponentType.HERO_WITH_PICTURE:
      return <Hero {...props} />
    case ComponentType.RICH_TEXT:
      // @ts-ignore
      return <RichText {...props} />
    default:
      return <></>
  }
}

export default SanityComponent

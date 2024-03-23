import { SanityEntry, imageBuilder } from "@/utils/sanity/client"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import Image from "next/image"

export interface HeroProps extends SanityEntry {
  title: string
  description?: string
  buttonLabel?: string
  image: SanityImageSource
  imageStyle: "rounded-full" | "rounded-box"
}

const Hero = ({
  title,
  description,
  buttonLabel,
  image,
  imageStyle,
}: HeroProps) => {
  const heroImage = imageBuilder.image(image).url()

  return (
    <div className="p-4">
      <div className="container flex flex-row justify-start bg-base-100 p-4 lg:p-20 rounded-box relative">
        <div className="lg:max-w-[66%] my-6 lg:ly-12 z-10">
          <h1 className="text-6xl mb-8 whitespace-pre-wrap">{title}</h1>
          {description && <p className="mb-10">{description}</p>}
          <button className="btn">{buttonLabel}</button>
        </div>
        <Image
          src={heroImage}
          alt={title}
          width={400}
          height={400}
          className={`absolute right-4 top-4 w-[50%] ${imageStyle}`}
        />
      </div>
    </div>
  )
}

export default Hero

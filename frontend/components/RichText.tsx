"use client"
import { CheckCircleIcon, ListBulletIcon } from "@heroicons/react/20/solid"
import { PortableText, PortableTextBlockComponent } from "@portabletext/react"
import Image from "next/image"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { imageBuilder } from "@/utils/sanity/client"

type RichTextType = {
  richText: PortableTextBlockComponent
}

const myPortableTextComponents = {
  types: {
    richImage: ({ value }) => {
      return (
        <img
          src={imageBuilder.image(value.image).url()}
          alt=""
          className={`object-contain w-[50%] lg:w-[20%] ${
            value.isRight ? "float-right ml-3" : "float-left mr-3"
          } rounded-box`}
        />
      )
    },
  },
  block: {
    // This type definition not true, but close enough
    h5: ({ children }: { children: string }) => (
      <h5 className="text-base font-semibold leading-7 text-primary">
        {children}
      </h5>
    ),
    h1: ({ children }: { children: string }) => (
      <>
        <h5 className="mb-4 mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {children}
        </h5>
        <div className="divider"></div>
      </>
    ),
    normal: ({ children }: { children: string }) => (
      <p className="min-h-7 pb-3">{children}</p>
    ),
  },
  list: {
    bullet: ({ children }: { children: string }) => {
      return <ul>{children}</ul>
    },
  },
  listItem: {
    bullet: ({ children }: { children: string }) => (
      <li className="flex gap-x-3">
        <CheckCircleIcon
          className="mt-1 h-5 w-5 flex-none text-primary"
          aria-hidden="true"
        />
        <span>{children}</span>
      </li>
    ),
  },
}

export default function RichText({ richText }: RichTextType) {
  return (
    <div className="p-4">
      <div className="container bg-base-100 p-4 lg:p-20 rounded-box relative overflow-hidden">
        <PortableText value={richText} components={myPortableTextComponents} />
      </div>
    </div>
  )
}

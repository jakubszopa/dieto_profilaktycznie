import { createClient } from "next-sanity"
import SanityClient from "next-sanity-client"
import groq from "groq"
import imageUrlBuilder from "@sanity/image-url"
import { SanityImageSource } from "@sanity/image-url/lib/types/types"
import { HeroProps } from "@/components/Hero"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-05-03"

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})

const queries = {
  getPagesQuery: groq`*[_type in ["page", "header", "footer"]] {
    ...,
    sections[]->
  }`,
  getHomepageQuery: groq`*[_type == "page" && slug.current == "root"][0] {
    ...,
    sections[]->
  }`,
}

export const sanityClient = new SanityClient({
  projectId: projectId ?? "",
  dataset: dataset ?? "production",
  queries,
})

export const sanityImageClient = createClient({
  projectId,
  dataset,
  useCdn: true,
})

export const imageBuilder = imageUrlBuilder({
  projectId: projectId ?? "",
  dataset: dataset ?? "production",
})

export type SanityEntry = {
  _type: string
  _id: string
}

export interface Page extends SanityEntry {
  slug: string
  sections: HeroProps[]
  metadata: {
    title?: string
    description?: string
    keywords?: string
    image?: SanityImageSource
  }
}

export const getPages = sanityClient.createApiUtil<Page[]>("getPagesQuery")
export const getHomepageData =
  sanityClient.createApiUtil<Page>("getHomepageQuery")

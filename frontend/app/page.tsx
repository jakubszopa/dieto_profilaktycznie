import Image from "next/image"
import { client, getHomepageData } from "@/utils/sanity/client"
import SanityComponent from "@/components/SanityComponent"
import About from "@/components/About"
import Socials from "@/components/Socials"

export default async function Home() {
  const homepage = await getHomepageData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {homepage.sections.map((section) => (
        <SanityComponent key={section._id} {...section} />
      ))}
      <Socials />
    </main>
  )
}

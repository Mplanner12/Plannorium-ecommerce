import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function MainNav() {
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/favicon4.png" alt="logo" width={50} height={50} />
        {/* <Icons.logo className="h-7 w-7" /> */}
        <span className="inline-block text-xl font-bold">
          {siteConfig.name}
        </span>
      </Link>
    </div>
  )
}

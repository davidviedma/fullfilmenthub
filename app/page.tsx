import { Nav } from "@/components/nav"
import { Hero } from "@/components/Sections/hero"
import { Modules } from "@/components/Sections/modules"
import { Services } from "@/components/Sections/services"
import { Visibility } from "@/components/Sections/visibility"
import { Integrations } from "@/components/Sections/integrations"
import { Cta } from "@/components/Sections/cta"
import { Footer } from "@/components/Sections/footer"

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <Modules />
      <Services />
      <Visibility />
      <Integrations />
      <Cta />
      <Footer />
    </>
  )
}

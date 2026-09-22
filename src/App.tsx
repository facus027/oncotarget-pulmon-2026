import { Header } from "./components/layout/Header"
import { AudienceSection } from "./components/sections/AudienceSection"
import { BannerEnd } from "./components/sections/BannerEnd"
import { EventDate } from "./components/sections/EventDate"
import { Hero } from "./components/sections/Hero"
import { InterdisciplinarySection } from "./components/sections/InterdisciplinarySection"
import { IntroSection } from "./components/sections/IntroSection"
import { LocationSection } from "./components/sections/LocationSection"
import { ProgramSection } from "./components/sections/ProgramSection"
import { RegistrationSection } from "./components/sections/RegistrationSection"
import { SponsorsSection } from "./components/sections/SponsorsSection"
import { WhyOncoTarget } from "./components/sections/WhyOncoTarget"


function App() {
 

  return (
    <>
         <Header />

      <main className="overflow-x-hidden">

        <Hero />
        <EventDate/>
        <IntroSection/>
        <WhyOncoTarget/>
        <InterdisciplinarySection/>
        <AudienceSection/>
        <SponsorsSection/>
        <ProgramSection/>
        <RegistrationSection/>
        <LocationSection/>
        <BannerEnd />
        
      </main>
    </>
  )
}

export default App

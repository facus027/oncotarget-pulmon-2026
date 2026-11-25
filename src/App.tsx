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
import { VideoSection } from "./components/sections/VideoSection"
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

        <VideoSection
          src="https://res.cloudinary.com/dwxwejuvu/video/upload/c_scale,w_1600/q_auto/f_auto/OncoTarget_Pulmon_2026_video_qh83af.mp4"
          poster="https://res.cloudinary.com/dwxwejuvu/video/upload/so_26,c_scale,w_1600/q_auto/f_auto/OncoTarget_Pulmon_2026_video_qh83af.jpg"
        />

        <ProgramSection/>
        <RegistrationSection/>
        <LocationSection/>
        <BannerEnd />
        
      </main>
    </>
  )
}

export default App

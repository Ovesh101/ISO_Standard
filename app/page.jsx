import Accrediation from "./components/Accrediation"
import Certificate from "./components/Certificate"
import Clients from "./components/Clients"

import Hero from "./components/Hero"
import OnBoard from "./components/OnBoard"
import Ready from "./components/Ready"
import Search from "./components/Search"
import Training from "./components/Training"

const page = () => {
  return (
    <div className="p-2 " >

    <Hero />
    <Clients />

    <Accrediation />
    <OnBoard />
    <Search />
    <Certificate />
    <Training />
    <Ready />


    </div>
  )
}
export default page
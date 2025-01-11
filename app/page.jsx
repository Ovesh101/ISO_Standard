import Accrediation from "./components/Accrediation"
import Certificate from "./components/Certificate"
import Clients from "./components/Clients"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Ready from "./components/Ready"
import Search from "./components/Search"

const page = () => {
  return (
    <div className="p-2" >

    <Hero />
    <Clients />
    <Accrediation />
    <Search />
    <Certificate />
    <Ready />

    </div>
  )
}
export default page
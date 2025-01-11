import Accrediation from "./components/Accrediation"
import Certificate from "./components/Certificate"
import Clients from "./components/Clients"
import Header from "./components/Header"
import Hero from "./components/Hero"

const page = () => {
  return (
    <div className="p-2" >
    <Header />
    <Hero />
    <Clients />
    <Accrediation />
    <Certificate />
    </div>
  )
}
export default page
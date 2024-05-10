import Advices from "../components/Advices"
import Hero from "../components/Hero"
import Info from "../components/Info"
import SliderImg from "../components/SliderImg"
import VisitedCities from "../components/VisitedCities"
function Home (){
    return(
        <main >
            <Hero/>
            <Info/>
            <SliderImg/>
            <Advices/>
            <VisitedCities/>
            <h1>advices</h1>
            <h1>most visited cities</h1>
            <h1>most fav cities in app</h1>
            <h1>some of the stories</h1>
        </main>
    )
}
export default Home
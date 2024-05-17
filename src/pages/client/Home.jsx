import Advices from "../../components/clients/Advices"
import Hero from "../../components/clients/Hero"
import Info from "../../components/clients/Info"
import SliderImg from "../../components/clients/SliderImg"
import VisitedCities from "../../components/clients/VisitedCities"
import HStory from "../../components/clients/HStory"
function Home (){
    return(
        <main >
            <Hero/>
            <Info/>
            <SliderImg/>
            <Advices/>
            <VisitedCities/>
            <HStory/>
            <h1>advices</h1>
            <h1>most visited cities</h1>
            <h1>most fav cities in app</h1>
            <h1>some of the stories</h1>
        </main>
    )
}
export default Home
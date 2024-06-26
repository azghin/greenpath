import VisitedCard from "../../layouts/clients/VisitedCard";
import { BestCities } from "../../recoil_state";
import { useRecoilValue } from "recoil";


function VisitedCities(){
    const getBestCities = useRecoilValue(BestCities)
    return(
        <section id="Mostvisited">
            <div className="container">
                <h3 className="section-title">You might have heard of</h3>
                <div className="row">
                    {getBestCities.map(obj=><VisitedCard city={obj} key={obj.id}/>)}
                    {/* <VisitedCard city="tanger"/>
                    <VisitedCard city="tetouan"/>
                    <VisitedCard city="kesh"/> */}
                </div>
            </div>
        </section>
    )
}
export default VisitedCities
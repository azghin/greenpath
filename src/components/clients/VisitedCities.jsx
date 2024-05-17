import VisitedCard from "../../layouts/clients/VisitedCard";

function VisitedCities(){
    return(
        <section id="Mostvisited">
            <div className="container">
                <h3 className="section-title">You might have heard of</h3>
                <div className="row">
                    <VisitedCard city="tanger"/>
                    <VisitedCard city="tetouan"/>
                    <VisitedCard city="kesh"/>
                </div>
            </div>
        </section>
    )
}
export default VisitedCities
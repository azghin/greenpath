export default function WelcomeCity(props){
    return(
        <section className="WCity">
            <div className="container">
                <h3> you're now navigating {props.name} </h3>
            </div>
        </section>
    )
}
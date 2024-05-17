import { Link } from 'react-router-dom'
import heroimg from '../img/hero-img.svg'
function Hero(){
    return(
        <section id="hero" className='clearfix'>
            <div className="container">
                <div className="hero-img">
                    <img src={heroimg} alt="" className='img-fluid' />
                </div>
                <div className="hero-info">
                    <h2>We Provide a <br/><span>smooth traveling</span><br/>in Morroco</h2>
                    <div>
                        <Link to="/cities" className='btn-get-started scrollto'>Cities</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
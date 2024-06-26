import { atom } from "recoil";
import CitiesJson from './Data/Cities.json'
import reviews from './Data/Reviews.json'
import PlacesJson from './Data/Places.json'
const User=atom({
    key:'User',
    default : {isAdmin:false}
})

const CitiesL=atom({
    key:'Cities',
    default:CitiesJson
})

const BestCities=atom({
    key:'BestCities',
    default:CitiesJson.filter(obj=>obj.hasOwnProperty('ranking'))
})

const Blogs=atom({
    key:'Blog',
    default:reviews
})

const Places = atom({
    key:'Places',
    default:PlacesJson
})


export {User,CitiesL,BestCities,Blogs,Places}
// import { Route, Routes } from "react-router-dom";
import Client from './pages/Client'
// importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import 'bootstrap-icons/font/bootstrap-icons.css';

import { useParams } from 'react-router-dom';



function App() {
  const params = useParams();
  // console.log(params)
  const isAdmin = isUserAdmin(params);
  return (
    <div className="App" >

      {isAdmin ? 'nop ' : <Client/>}
    </div>
  );
}
function isUserAdmin(params){
  // if(params)
    if(params==='admin'){
      return true
    }else return false

}

export default App;

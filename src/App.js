import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Suspense, lazy } from "react";
import { useLocation } from 'react-router-dom';


const Admin = lazy(()=>import('./pages/Admin'))
const Client = lazy(() => import('./pages/Client'))


function App() {
  const Location=useLocation().pathname;
  const isAdmin = isUserAdmin(Location);
  return (
    <div className="App" >

      {isAdmin ? <Admin /> : <Suspense>  <Client /></Suspense>}
    </div>
  );
}
function isUserAdmin(params) {
  // if(params)
   const Admin=params.split('/')[1];
  if (Admin === 'admin') {
    return true
  } else return false

}

export default App;

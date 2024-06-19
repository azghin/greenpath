import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Suspense, lazy, memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { User } from "./recoil_state";
import { useNavigate } from "react-router-dom";

const Admin = lazy(() => import("./pages/Admin"));
const Client = lazy(() => import("./pages/Client"));

function App() {
  const UserValue = useRecoilValue(User)
  const [UserClient , setClient]=useState({})
  const goAdmin = useNavigate();
  useEffect(()=>{
    setClient(UserValue)
  },[UserValue])
  const isAdmin = isUserAdmin(UserClient)
  if (isAdmin){
    goAdmin('/admin')
  }
  // const Location = useLocation().pathname;
  // const isAdmin = isUserAdmin(ClientUser);
  
  // const isAdmin = memo(()=>)
  return (
    
      <div className="App">
        {isAdmin ? (
          <Admin />
        ) : (
          <Suspense>
            <Client />
          </Suspense>
        )}
      </div>
    
  );
}
function isUserAdmin(params) {
  // if(params)
  const Admin = params.isAdmin;
  if (Admin === true) {
    return true;
  } else return false;
}

export default App;

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Suspense, lazy, useMemo } from "react";
import { useRecoilValue } from "recoil";
import { User } from "./recoil_state";

const Admin = lazy(() => import("./pages/Admin"));
const Client = lazy(() => import("./pages/Client"));

function App() {
  const getUser =useRecoilValue(User);
  // useEffect(()=>{
  //   setClient(getUser)
  // },[getUser])


  const isAdmin = useMemo(()=>getUser.isAdmin===true,[getUser])
  // useEffect(()=>{
  //   if(Object.keys(getUser).length===1){
  //     console.log('cool')
  //   }else{
  //     setClient(getUser)
  //   }
  // },[getUser])


  // useEffect(()=>{
  //   if()
  // })
  // useEffect(()=>{
  //   if (Object.keys(getUser).length>1){
  //     startTransition(()=>{
  //       setClient(getUser)
  //     })
      
  //   }
  //   else {startTransition(()=>{setClient({isAdmin:false})})} 
  // },[getUser])
  console.log(isAdmin)


 
  return (
    
      <div className="App">

        {isAdmin ? (
          
              <Suspense><Admin user={getUser} /> </Suspense> 
        ) : (
          
            <Suspense > <Client/> </Suspense>
        )}
        
      </div>
    
  );
}
export default App;

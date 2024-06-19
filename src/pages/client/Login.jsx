
import { useRecoilValue, useSetRecoilState } from "recoil";
import { User } from "../../recoil_state";
import {  useNavigate } from "react-router-dom";
import {  useState } from "react";

const Azghin = {email:'azghin@gmail.com',password:'password',isAdmin:true}

export default function Login() {
  const [LogUser,setLogUser]=useState({});
  const SetUser = useSetRecoilState(User);
  const handleLogin = ()=>{
    setLogUser(Azghin)
    SetUser(()=>(Azghin))
    console.log(LogUser)
  }

  
  return (
    <section>
      <form action="" >
        <div className="container">
          <div className="form-outline mb-4">
            <input type="email" id="email" className="form-control" value={User.email} />
            <label className="form-label" for="email">
              Email address
            </label>
          </div>
          <div className="form-outline mb-4">
            <input type="password" id="password" className="form-control" value={User.password} />
            <label className="form-label" for="password">
              Password
            </label>
          </div>
          <button type="button" className="btn btn-primary btn-block mb-4" onClick={handleLogin}>
             Sign in
          </button>
        </div> 
      </form>
    </section>
  );
}

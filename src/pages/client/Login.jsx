import { useSetRecoilState } from "recoil";
import { User } from "../../recoil_state";
import { useNavigate, useLocation } from "react-router-dom";
import Users from "../../Data/Users.json";
import { startTransition, useEffect, useState } from "react";


import LoginSvg from '../../img/login-svg.svg'
export default function Login() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const goRoute = useNavigate();
  const SetUser = useSetRecoilState(User);
  const checkEmail = () => {
    if (Users.find((user) => user["email"] === email)) {
      if (Users.find((user) => user["password"] === password)) {
        const newLogIn = Users.find((user) => user["email"] === email);
             startTransition(()=>{
              SetUser(() => newLogIn);
             })     
        
        if (newLogIn.isAdmin === true) {
          goRoute("/admin");
          goRoute(0);
        } else {
          goRoute("/");
        }
      } else {
        setIsPasswordValid(false);
      }
    } else {
      setIsEmailValid(false);
    }
  };

  return (
    <section id="login" className=" text-center text-lg-start">
      <div className="container">
        <div className="card mb-3">
          <div className="row row g-0 d-flex align-items-center">
            <div className="col-lg-4 d-none d-lg-flex">
              <img
                src={LoginSvg}
                alt="Get Started with GREEN PATH"
                className="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
              />
            </div>
            <div className="col-lg-8">
              <div className="card-body py-5 px-md-5">
                <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  
                  {isEmailValid ? null : (
                    <p className="mark text-danger">wrong email</p>
                  )}
                </div>
                <div data-mdb-input-init className="form-outline mb-4">
                <label className="form-label" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                  
                  {isPasswordValid ? null : (
                    <p className="mark text-danger">wrong password</p>
                  )}
                </div>
                <button
                  type="button"
                  className="btn btn-success btn-block mb-4"
                  onClick={checkEmail}
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

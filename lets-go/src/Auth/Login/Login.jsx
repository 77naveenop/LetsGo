import React from "react";
import "./Login.scss";
import AV from "../Login/CRM-Avatars.jpg";

const Login = () => {
    return (
        <div className="container">
            <div className="column">
                <div className="col-1">
                    <h1 className="login-head">Login </h1>
                    <div class="mb-3 row email">
                        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                        <div class="col-sm-10">
                            <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                        </div>
                    </div>
                    <div class="mb-3 row pass">
                        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword" />
                        </div>
                    </div>
                    <button className="login-btn">Login</button>
                  {/* <div><span>Not A Member?<a href="">Sign-In</a></span></div> */}
                </div>
                
                <div className="col-2">
                    <img src={AV} alt="" className="loginP-img" />
                </div>
            </div>
        </div>
    )
}

export default Login;
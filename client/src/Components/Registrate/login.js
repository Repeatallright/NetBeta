import { useContext, useRef, useEffect } from "react";
import Context from "../../Context/Context";
import React from "react";
import { setCurrentItem } from "../../store/storageApp";
import move from "../../hooks/move";
import { useDispatch } from "react-redux";
import "./registrate.css";
import { setRegister } from "../../store/storageApp";

function Login() {
  let dispatch = useDispatch();
  const { Enter, email, password, hideBlock, isMobile, register, iteme } =
    useContext(Context);
  let trueHref = window.screen.width > 500 ? "/general" : "/bio";

  useEffect(() => {
    if (isMobile) {
      move(register, iteme, hideBlock);
      dispatch(setCurrentItem({ log: hideBlock, hide: iteme }));
    }
  }, [iteme]);



  if (!isMobile) {
    return (
      <div className="container">
        <h2 className="login_lable">Sign in</h2>
        <input
          ref={email}
          type="text"
          className="login_in bio_inputs"
          placeholder="Email"
        />
        <input
          ref={password}
          type="text"
          className="password_in bio_inputs"
          placeholder="Password"
        />
        <div className="reg_active" onClick={() => dispatch(setRegister(true))}>
          Create account
        </div>
        <div to={trueHref} className="log_but" onClick={() => Enter()}>
          Enter
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div
          ref={hideBlock}
          className="hide_window"
          style={{ display: "flex" }}
        ></div>
        <div ref={iteme} className="login_window">
          <div className="container">
            <h2 className="login_lable">Sign in</h2>
            <input
              ref={email}
              type="text"
              className="login_in bio_inputs"
              placeholder="Login"
            />
            <input
              ref={password}
              type="text"
              className="password_in"
              placeholder="Password"
            />
            <div
              className="reg_active"
              onClick={() => dispatch(setRegister(true))}
            >
              Create account
            </div>
            <div to="/bio" className="log_but" onClick={() => Enter()}>
              Enter
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Login;

import React from "react";
import "./lstyle.css";
import "../Home/home.js";

const Login = (props) => {
  const {
    email,
    password,
    setPassword,
    setEmail,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    handleLogout
  } = props;

  return (
    <div>
      <div className="image-slide">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="https://img.etimg.com/thumb/msid-78366081,width-1200,height-900/industry/transportation/airlines-/-aviation/operations-at-t2-of-indira-gandhi-international-airport-to-recommence-from-october-1.jpg"
                alt="First slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://bsmedia.business-standard.com/_media/bs/img/article/2018-02/21/full/1519154941-3773.jpg"
                alt="Second slide"
              ></img>
            </div>
            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="https://static.toiimg.com/photo/79039820/airport.jpg?width=748&resize=4..."
                alt="Third slide"
              ></img>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="loginContainer">
        <label className="label-font">Username </label>
        <input
          type="text"
          autoFocus
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="erroeMsg">{emailError}</p>
        <label className="label-font">Password </label>
        <input
          type="password"
          autoFocus
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="erroeMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button className="btn btn-primary" onClick={handleLogin}>
                Sign In
              </button>
              <p className="label-font">
                Don't have an account ?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
              </p>
            </>
          ) : (
            <>
              <button className="btn btn-primary" onClick={handleSignup}>
                Sign up
              </button>
              <p className="label-font">
                Have an account ?{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

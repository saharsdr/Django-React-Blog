import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Register() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  async function register() {
    const { data } = await axios.post("/api/users-register/", {
      password: pass,
      username: email,
    });
    console.warn(data);
    localStorage.setItem("user-info", JSON.stringify(data));
    history.push("/add");
  }
  return (
    <>
      <Div>
        <div className="limiter">
          <div
            className="container-login100"
            style={{ backgroundImage: `url("images/bg-01.jpg")` }}
          >
            <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
              <form className="login100-form validate-form" method="POST">
                <span className="login100-form-title p-b-49">ثبت نام</span>
                <div
                  className="wrap-input100 validate-input m-b-23"
                  data-validate="ورود نام الزامی است."
                >
                  <span className="label-input100">نام شما</span>
                  <input
                    className="input100"
                    type="text"
                    name="name"
                    placeholder="نام خود را وارد کنید."
                  />
                </div>
                <div
                  className="wrap-input100 validate-input m-b-23"
                  data-validate="Username is reauired"
                >
                  <span className="label-input100">ایمیل</span>
                  <input
                    className="input100"
                    type="email"
                    name="email"
                    placeholder="ایمیل خود را وارد کنیید."
                  />
                </div>

                <div
                  className="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <span className="label-input100">رمز</span>
                  <input
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="رمز خود را وارد کنید."
                  />
                </div>

                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn"></div>
                    <button onClick={register} className="login100-form-btn">
                      ثبت نام
                    </button>
                  </div>
                </div>

                <div className="flex-col-c p-t-105">
                  <span className="txt1 p-b-17">حساب کاربری دارید؟</span>

                  <Link to="/login" className="txt2">
                    ورود
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Div>
    </>
  );
}

export default Register;

const Div = styled.div`
  /*//////////////////////////////////////////////////////////////////
[ RESTYLE TAG ]*/
  .p-t-8 {
    padding-top: 8px;
  }
  .p-b-31 {
    padding-bottom: 31px;
  }
  .flex-col-c {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -moz-flex-direction: column;
    -ms-flex-direction: column;
    -o-flex-direction: column;
    flex-direction: column;
    -ms-align-items: center;
    align-items: center;
  }
  .p-b-17 {
    padding-top: 17px;
  }
  .p-t-105 {
    padding-top: 105px;
  }
  .m-b-23 {
    margin-bottom: 23px;
  }
  .p-b-49 {
    padding-bottom: 49px;
  }
  .p-l-55 {
    padding-left: 55px;
  }
  .p-r-55 {
    padding-right: 55px;
  }
  .p-t-65 {
    padding-top: 65px;
  }
  .p-b-54 {
    padding-bottom: 54px;
  }
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  /*---------------------------------------------*/
  a {
    font-size: 14px;
    line-height: 1.7;
    color: #666666;
    margin: 0px;
    transition: all 0.4s;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
  }

  a:focus {
    outline: none !important;
  }

  a:hover {
    text-decoration: none;
    color: #a64bf4;
  }

  /*---------------------------------------------*/
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0px;
  }

  p {
    font-size: 14px;
    line-height: 1.7;
    color: #666666;
    margin: 0px;
  }

  ul,
  li {
    margin: 0px;
    list-style-type: none;
  }

  /*---------------------------------------------*/
  input {
    outline: none;
    border: none;
  }

  textarea {
    outline: none;
    border: none;
  }

  textarea:focus,
  input:focus {
    border-color: transparent !important;
  }

  input:focus::-webkit-input-placeholder {
    color: transparent;
  }
  input:focus:-moz-placeholder {
    color: transparent;
  }
  input:focus::-moz-placeholder {
    color: transparent;
  }
  input:focus:-ms-input-placeholder {
    color: transparent;
  }

  textarea:focus::-webkit-input-placeholder {
    color: transparent;
  }
  textarea:focus:-moz-placeholder {
    color: transparent;
  }
  textarea:focus::-moz-placeholder {
    color: transparent;
  }
  textarea:focus:-ms-input-placeholder {
    color: transparent;
  }

  input::-webkit-input-placeholder {
    color: #adadad;
  }
  input:-moz-placeholder {
    color: #adadad;
  }
  input::-moz-placeholder {
    color: #adadad;
  }
  input:-ms-input-placeholder {
    color: #adadad;
  }

  textarea::-webkit-input-placeholder {
    color: #adadad;
  }
  textarea:-moz-placeholder {
    color: #adadad;
  }
  textarea::-moz-placeholder {
    color: #adadad;
  }
  textarea:-ms-input-placeholder {
    color: #adadad;
  }

  /*---------------------------------------------*/
  button {
    outline: none !important;
    border: none;
    background: transparent;
  }

  button:hover {
    cursor: pointer;
  }

  iframe {
    border: none !important;
  }

  /*//////////////////////////////////////////////////////////////////
[ Utility ]*/
  .txt1 {
    font-family: Poppins-Regular;
    font-size: 14px;
    line-height: 1.5;
    color: #666666;
  }

  .txt2 {
    font-family: Poppins-Regular;
    font-size: 14px;
    line-height: 1.5;
    color: #333333;
    text-transform: uppercase;
  }

  .bg1 {
    background-color: #3b5998;
  }
  .bg2 {
    background-color: #1da1f2;
  }
  .bg3 {
    background-color: #ea4335;
  }

  /*//////////////////////////////////////////////////////////////////
[ login ]*/
  .limiter {
    width: 100%;
    margin: 0 auto;
  }

  .container-login100 {
    width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  .wrap-login100 {
    width: 500px;
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
  }

  /*------------------------------------------------------------------
[ Form ]*/

  .login100-form {
    width: 100%;
  }

  .login100-form-title {
    display: block;
    font-family: Poppins-Bold;
    font-size: 39px;
    color: #333333;
    line-height: 1.2;
    text-align: center;
  }

  /*------------------------------------------------------------------
[ Input ]*/

  .wrap-input100 {
    width: 100%;
    position: relative;
    border-bottom: 2px solid #d9d9d9;
  }

  .label-input100 {
    font-size: 14px;
    color: #333333;
    line-height: 1.5;
    padding-left: 7px;
  }

  .input100 {
    font-size: 16px;
    color: #333333;
    line-height: 1.2;

    display: block;
    width: 100%;
    height: 55px;
    background: transparent;
    padding: 0 7px 0 43px;
  }

  /*---------------------------------------------*/
  .focus-input100 {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  .focus-input100::after {
    content: attr(data-symbol);
    font-family: Material-Design-Iconic-Font;
    color: #adadad;
    font-size: 22px;

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    height: calc(100% - 20px);
    bottom: 0;
    left: 0;
    padding-left: 13px;
    padding-top: 3px;
  }

  .focus-input100::before {
    content: "";
    display: block;
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: #7f7f7f;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  .input100:focus + .focus-input100::before {
    width: 100%;
  }

  .has-val.input100 + .focus-input100::before {
    width: 100%;
  }

  .input100:focus + .focus-input100::after {
    color: #a64bf4;
  }

  .has-val.input100 + .focus-input100::after {
    color: #a64bf4;
  }

  /*------------------------------------------------------------------
[ Button ]*/
  .container-login100-form-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .wrap-login100-form-btn {
    width: 100%;
    display: block;
    position: relative;
    z-index: 1;
    border-radius: 25px;
    overflow: hidden;
    margin: 0 auto;

    box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
    -moz-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
    -webkit-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
    -o-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
    -ms-box-shadow: 0 5px 30px 0px rgba(3, 216, 222, 0.2);
  }

  .login100-form-bgbtn {
    position: absolute;
    z-index: -1;
    width: 300%;
    height: 100%;
    background: #a64bf4;
    background: -webkit-linear-gradient(
      right,
      #00dbde,
      #fc00ff,
      #00dbde,
      #fc00ff
    );
    background: -o-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
    background: -moz-linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
    background: linear-gradient(right, #00dbde, #fc00ff, #00dbde, #fc00ff);
    top: 0;
    left: -100%;

    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  }

  .login100-form-btn {
    font-family: Poppins-Medium;
    font-size: 16px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 50px;
  }

  .wrap-login100-form-btn:hover .login100-form-bgbtn {
    left: 0;
  }

  /*------------------------------------------------------------------
[ Alert validate ]*/

  .validate-input {
    position: relative;
  }

  .alert-validate::before {
    content: attr(data-validate);
    position: absolute;
    max-width: 70%;
    background-color: #fff;
    border: 1px solid #c80000;
    border-radius: 2px;
    padding: 4px 25px 4px 10px;
    bottom: calc((100% - 20px) / 2);
    -webkit-transform: translateY(50%);
    -moz-transform: translateY(50%);
    -ms-transform: translateY(50%);
    -o-transform: translateY(50%);
    transform: translateY(50%);
    right: 2px;
    pointer-events: none;

    font-family: Poppins-Regular;
    color: #c80000;
    font-size: 13px;
    line-height: 1.4;
    text-align: left;

    visibility: hidden;
    opacity: 0;

    -webkit-transition: opacity 0.4s;
    -o-transition: opacity 0.4s;
    -moz-transition: opacity 0.4s;
    transition: opacity 0.4s;
  }

  .alert-validate::after {
    content: "\f06a";
    font-family: FontAwesome;
    display: block;
    position: absolute;
    color: #c80000;
    font-size: 16px;
    bottom: calc((100% - 20px) / 2);
    -webkit-transform: translateY(50%);
    -moz-transform: translateY(50%);
    -ms-transform: translateY(50%);
    -o-transform: translateY(50%);
    transform: translateY(50%);
    right: 8px;
  }

  .alert-validate:hover:before {
    visibility: visible;
    opacity: 1;
  }

  @media (max-width: 992px) {
    .alert-validate::before {
      visibility: visible;
      opacity: 1;
    }
  }

  /*//////////////////////////////////////////////////////////////////
[ Social item ]*/
  .login100-social-item {
    font-size: 25px;
    color: #fff;

    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 5px;
  }

  .login100-social-item:hover {
    color: #fff;
    background-color: #333333;
  }

  /*//////////////////////////////////////////////////////////////////
[ Responsive ]*/

  @media (max-width: 576px) {
    .wrap-login100 {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`;

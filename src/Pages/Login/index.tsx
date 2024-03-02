import React from "react";
import * as S from "./styles";
import * as C from "../../common-styles";
import { Link, useNavigate } from "react-router-dom";
import { TbEyeClosed } from "react-icons/tb";
import ColoredLogo from "../../Assets/Images/logo-colored.svg";
import GoogleIcon from "../../Assets/Images/google-icon.svg";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from '@react-oauth/google';

const Login: React.FC = () => {
  const CLIENT_ID: string = process.env.REACT_APP_CLIENT_ID! || '';
  const navigate = useNavigate();

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <S.LoginWrapper>
        <S.LoginContainer>
          <S.ColoredLogo src={ColoredLogo} />
          <S.LoginContent>
            <h1 className="font-roboto font-reg">Log in</h1>

            <div className="login-form">
              <div>
                <C.CommonInput placeholder="Email " />
              </div>
              <C.IconInputWrapper>
                <C.CommonInput placeholder="Password " />
                <TbEyeClosed className="input-icon" size={18} />
              </C.IconInputWrapper>

              <C.CommonButton onClick={() => navigate('/home')}>Continue</C.CommonButton>
              <div className="text-center">
                <Link to="/password/forget" className="text-white">
                  Forgot Password ?
                </Link>
              </div>

              <div className="or-title">
                <span>Or</span>
              </div>

              <div className="text-center">
                <p className="text-[#767676]">
                  Don't have an account ?
                  <Link className="text-white" to={"/signup"}>
                    {" "}
                    Sign up
                  </Link>
                </p>
              </div>

              <div>

                <GoogleLogin
                  onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                  useOneTap
                />;

                <C.CommonIonButton type="button">
                  <img alt="fanxo-logo" src={GoogleIcon} />
                  <span>Login With Google</span>
                </C.CommonIonButton>
              </div>
            </div>
          </S.LoginContent>
        </S.LoginContainer>
      </S.LoginWrapper>
    </GoogleOAuthProvider>
  );
};

export default Login;

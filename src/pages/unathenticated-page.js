/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { sans18W600 } from "../styles/typography";
import { containerSignLogin, contForm, imageLogin } from "../styles/unauthenticated";
import { containerColumn, containerRow, contCenterCenter, contRowAround } from "../styles/utils";
import { LoginPage } from "./login-page";
import { SignupPage } from "./signup-page";

const UnauthenticatedPage = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  //  Functions to handle Tab Switching
  const handleLogin = () => setActiveTab("tab1")
  const handleSignUp = () => setActiveTab("tab2");
  return (
    <div>
      <div >
        <div css={css`${imageLogin}; ${contCenterCenter}`}>
        <img src={process.env.PUBLIC_URL + "/Eatable.png"} />
        </div>
        <div css={css`${containerSignLogin}; ${sans18W600}`}>
          <div onClick={handleLogin}>Login</div>
          <div onClick={handleSignUp}>Sign-up</div>
        </div>
      </div>
      <div css={css`${contForm}`}>
        {activeTab === "tab1" ? <LoginPage /> : <SignupPage />}
      </div>
    </div>
  );
};
export default UnauthenticatedPage;

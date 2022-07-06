import { useState } from "react";
import { LoginPage } from "./login-page";
import { SignupPage } from "./signup-page";

const UnauthenticatedPage = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  //  Functions to handle Tab Switching
  const handleLogin = () => setActiveTab("tab1")
  const handleSignUp = () => setActiveTab("tab2");
  return (
    <div>
      <div>
        <img src={process.env.PUBLIC_URL + "/Eatable.png"} />
        <ul>
          <li onClick={handleLogin}>Login</li>
          <li onClick={handleSignUp}>Sign-up</li>
        </ul>
      </div>

      <div className="outlet">
        {activeTab === "tab1" ? <LoginPage /> : <SignupPage />}
      </div>
    </div>
  );
};
export default UnauthenticatedPage;

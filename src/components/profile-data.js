/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useAuth } from "../context/auth-context";
import { buttonLogin, containerCard, labelInput } from "../styles/utils";
const ProfileData = () => {
  const { user, logout } = useAuth();
  const handleLogout =()=>{
    logout().then((response)=> console.log(response));
  }
  return (
    <div>
      <div>Personal Details</div>
      <div
        css={css`
          ${containerCard}
        `}
      >
        <label>{user.name}</label>
        <label>{user.email}</label>
        <label>{user.phone}</label>
        <label>{user.address}</label>
      </div>
      <div css={css`${buttonLogin}`}>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};
export default ProfileData;

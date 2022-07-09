/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useAuth } from "../context/auth-context";
import { buttonLogin, containerButton } from "../styles/button";
import { recordCard } from "../styles/record";
import {  container, containerCard, containerColumn, labelInput, line } from "../styles/utils";
const ProfileData = () => {
  const { user, logout } = useAuth();
  const handleLogout =()=>{
    logout().then((response)=> console.log(response));
  }
  return (
    <div >
      <div >
        <label>Personal Details</label>
        <div css={css`${recordCard};align-items: flex-start;`}>
          <label>{user.name}</label>
          <label>{user.email}</label>
          <div css={css`${line}`}></div>
          <label>{user.phone}</label>
          <div css={css`${line}`}></div>
          <label>{user.address}</label>
        </div>
      </div>
      <div css={css`${containerButton}`}>
        <button css={css`${buttonLogin}`} onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};
export default ProfileData;

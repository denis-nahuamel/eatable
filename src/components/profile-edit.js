/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { buttonLogin, containerButton } from "../styles/button";
import { sans18W600, sans22W600 } from "../styles/typography";
import { buttonMargin } from "../styles/unauthenticated";
import { containerCard, labelInput } from "../styles/utils";
const ProfileEdit = ({user, onHandleSubmit}) => {
    const handleSubmit= (value) => {
        onHandleSubmit(value)
    } 
    return (
        <div>
      <div  css={css`${sans18W600}; margin-left: 50px;`}>
        Update personal details
      </div>
      <div
        css={css`
          ${containerCard}; margin: 20px;
        `}
      >
        <form onSubmit={handleSubmit}>
          <div
            css={css`${labelInput}`}
          >
            <label>Name</label>
            <input type="text" id="name"/>
          </div>
          <div
            css={css`
              ${labelInput}
            `}
          >
            <label>Email</label>
            <input value={user.email} readOnly type="text" id="email" />
          </div>
          <div
            css={css`
              ${labelInput}
            `}
          >
            <label>Phone</label>
            <input type="text" id="phone"/>
          </div>
          <div
            css={css`
              ${labelInput}
            `}
          >
            <label>Address</label>
            <input type="text" id="address"/>
          </div>
          <div css={css` ${containerButton} `}>
            <button css={css`${buttonLogin}`} type="submit" value= "Update" >Update</button>
          </div>
        </form>
      </div>
    </div>
    )
}
export default ProfileEdit
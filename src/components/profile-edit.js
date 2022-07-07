/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { containerCard, labelInput } from "../styles/utils";
const ProfileEdit = ({user, onHandleSubmit}) => {
    const handleSubmit= (value) => {
        onHandleSubmit(value)
    } 
    return (
        <div>
      <div>
        <h2>Update personal details</h2>
      </div>
      <div
        css={css`
          ${containerCard}
        `}
      >
        <form onSubmit={handleSubmit}>
          <div
            css={css`
              ${labelInput}
            `}
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
          <div>
            <button type="submit" value= "Update" >Update</button>
          </div>
        </form>
      </div>
    </div>
    )
}
export default ProfileEdit
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { containerCard, labelInput } from "../styles/utils";
export const ProfilePage = () => {
  /***{ /profile
	"name": "Testino Diprueba",
	"phone": "987654321",
	"address": "Lima-Peru"
} */
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
        <div
          css={css`
            ${labelInput}
          `}
        >
          <label>Name</label>
          <input />
        </div>
        <div
          css={css`
            ${labelInput}
          `}
        >
          <label>Email</label>
          <input />
        </div>
        <div
          css={css`
            ${labelInput}
          `}
        >
          <label>Phone</label>
          <input />
        </div>
        <div
          css={css`
            ${labelInput}
          `}
        >
          <label>Address</label>
          <input />
        </div>
        <div>
          <button>Update</button>
        </div>
      </div>
    </div>
  );
};

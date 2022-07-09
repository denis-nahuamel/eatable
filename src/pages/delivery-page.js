/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useAuth } from "../context/auth-context";
import { buttonLogin, containerButton } from "../styles/button";
import { contTotalCheck } from "../styles/checkout-style";
import { description, sans18, sans18W400, sans18W600, sans28 } from "../styles/typography";
import { container, containerCard, containerColumn } from "../styles/utils";

const DeliveryPage = ({total, onHandleRecord})=> {
    const {user} = useAuth();
    return (
        <div css={css`${container}`}>
          <div css={css`${containerColumn}`}>
            <label css={css`${sans28}`}>Delivery</label>
            <div css={css` ${containerCard}`}>
              <label css={css`${sans18W600}`}>{user.name}</label>
              <label css={css`${sans18W400}`}>{user.address}</label>
              <label css={css`${sans18W400}`}>{user.phone}</label>
            </div>
            <div css={css`${contTotalCheck}`}>
                <label css={css`${description}`}>Total: </label>
                <label css={css`${sans28}`}>$ {total}</label>
            </div>
          </div>
          <div css={css`${containerButton}`}>
            <button css={css`${buttonLogin}`} onClick={onHandleRecord} >Complete Order</button>
          </div>
        </div>
      );
}
export default DeliveryPage;
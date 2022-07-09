/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { buttonLogin } from "../styles/button";
import { sans14W600Gray } from "../styles/typography";
import { backgroundForm, buttonMargin } from "../styles/unauthenticated";
import {  container, containerColumn } from "../styles/utils";

const FormData = ({ endpoint, type }) => {
  return (
   
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            //alert(JSON.stringify(values, null, 2));
            endpoint(values)
              .then((u) => console.log(u))
              .catch((e) => console.log(e));
            // endpointReceived(endpoint, values)
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form  >
            <div>
              <div>
                <div css={css`${containerColumn}`}>
                  <label css={css`${sans14W600Gray}`}>Email address: </label>
                  <Field css={css` ${backgroundForm} `} type="email" name="email" />
                  <ErrorMessage name="email" component="div" />
                </div>
                <div css={css` ${containerColumn} `}>
                  <label css={css`${sans14W600Gray}`}>Password: </label>
                  <Field css={css`${backgroundForm}`} type="password" name="password" />
                  <ErrorMessage name="password" component="div" />
                </div>
              </div>
              <div css={css` ${buttonMargin} `}>
                <button css={css`${buttonLogin}`} type="submit" disabled={isSubmitting}>
                  {type}
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    
  );
};
export default FormData;

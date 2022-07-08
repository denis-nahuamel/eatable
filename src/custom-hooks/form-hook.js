/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { buttonLogin } from "../styles/button";
import {  container, containerColumn } from "../styles/utils";

const FormData = ({ endpoint, type }) => {
  return (
    <div
      css={css`
        ${container}
      `}
    >
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
          <Form>
            <div
              css={css`
                ${containerColumn}
              `}
            >
              <label>Email address: </label>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div
              css={css`
                ${containerColumn}
              `}
            >
              <label>Password: </label>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
            </div>
            <div
              
            >
              <button css={css`${buttonLogin}`} type="submit" disabled={isSubmitting}>
                {type}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default FormData;


import React from "react";
import { useAuth } from "../context/auth-context";
import FormData from "../custom-hooks/form-hook";

export const LoginPage = () => {
  const { login } = useAuth();
  return <FormData endpoint={login} type={"login"} />
};

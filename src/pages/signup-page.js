import { useAuth } from "../context/auth-context"
import FormData from "../custom-hooks/form-hook"

export const SignupPage = () => {
   const {signupUser} = useAuth()
   return <FormData endpoint={signupUser} type={"Sign-up"} />
}
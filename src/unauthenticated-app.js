import {Navigate, Routes, Route} from "react-router-dom";
import { LoginPage } from "./pages/login-page";
import { SignupPage } from "./pages/signup-page";
import UnauthenticatedPage from "./pages/unathenticated-page";
export const UnauthenticatedApp = () => {
    return (
        <Routes>
            <Route path = "/">
                <Route index element={<Navigate to="auth" replace={true}/>}/>
                <Route path="auth" element={<UnauthenticatedPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route  path= "signup" element={<SignupPage />} />
                <Route  path = "*" element={<h2>Not Found</h2>} />
            </Route>
        </Routes>
    )
}
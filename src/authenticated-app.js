import {Routes, Route, Navigate} from "react-router-dom";
import { ProfilePage } from "./pages/profile-page";
import AuthenticatedPage from "./pages/authenticated-page";
import FoodPage from "./pages/food-page";
export const AuthenticatedApp = () => {
    return (
        <Routes>
            <Route path="/" >
                <Route index  element={<Navigate to="auth" replace={true}/>}/>
                <Route path= "auth" element = {<AuthenticatedPage />}/>
                <Route path="profile" element={<ProfilePage />} />
                <Route path="auth/food" element={<FoodPage />} />
            </Route>
        </Routes>
    )
}
import {Routes, Route, Navigate} from "react-router-dom";
import { ProfilePage } from "./pages/profile-page";
export const AuthenticatedApp = () => {
    return (
        <Routes>
            <Route path="/" >
                <Route index  element={<Navigate to="profile" replace={true}/>}/>
                <Route path="profile" element={<ProfilePage />} />
            </Route>
        </Routes>
    )
}
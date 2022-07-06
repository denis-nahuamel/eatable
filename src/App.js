import logo from './logo.svg';
import './App.css';
import {useAuth} from "./context/auth-context.js"
import { UnauthenticatedApp } from './unauthenticated-app';
import { AuthenticatedApp } from './authenticated-app';
function App() {
  const {user} = useAuth();

  return user? <AuthenticatedApp/>: <UnauthenticatedApp/>
}

export default App;

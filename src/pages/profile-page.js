import ProfileData from "../components/profile-data";
import ProfileEdit from "../components/profile-edit";
import { useAuth } from "../context/auth-context";
import { containerCard, labelInput } from "../styles/utils";
export const ProfilePage = () => {
  const { user, updateUser} = useAuth();
  /***{ /profile
	"name": "Testino Diprueba",
	"phone": "987654321",
	"address": "Lima-Peru"
} */
console.log("user", user)
const handleSubmit = (event) => {
  event.preventDefault();
  const {email, name, phone, address} = event.target.elements
  const userUpdated = {
    email: email.value,
    name: name.value,
    phone: phone.value,
    address: address.value
  }
  updateUser(userUpdated).then((response)=> console.log(response))
}
  return (
   user.name?<ProfileData />: <ProfileEdit user = {user} onHandleSubmit={handleSubmit} />
  );
};

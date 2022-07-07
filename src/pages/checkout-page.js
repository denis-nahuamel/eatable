import CardCheckout from "../components/card-checkout";
import { useAuth } from "../context/auth-context";

const CheckoutPage = ()=> {
    const {checkoutList} = useAuth()
    console.log("chd", checkoutList)
    return(
        <div>
            {checkoutList.map((element, index)=>(<CardCheckout key={index} element= {element}/>))}
        </div>
    )
}
export default CheckoutPage;
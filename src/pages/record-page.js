import { useEffect, useState } from "react";
import CardRecord from "../components/card-record";
import {getOrders} from "../services/order-service";
const RecordPage = ()=> {
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        getOrders().then((response)=>{
            setOrders(response);
        })
    },[])
    return (<>
        {orders?orders.map((response, index)=>(<CardRecord key={index} order={response}/>)):<p>empty</p>}
        </>)
}
export default RecordPage;
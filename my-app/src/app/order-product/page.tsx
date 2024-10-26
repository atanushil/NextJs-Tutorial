"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct(){
    const router=useRouter();
    const handelClick=()=>{
        console.log("Placing your order");
        // router.push("/");
        // router.forward();
        // router.back();
        router.replace("/");

    }
    return(
        <>
            <h1>Order Product</h1>
            <button onClick={handelClick}>Place Order</button>
        </>
    )
}
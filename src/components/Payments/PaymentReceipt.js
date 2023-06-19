import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PaymentReceipt=()=>
{
    const [buyer,setbuyer]=useState("Fetching.....")
    const [paymentid,setpaymentid]=useState("Fetching........")
    const [status,setstatus]=useState("Fetching.........")
    const [amount,setamount]=useState("Fetching......")
    const [title,settitle]=useState(null)
    const navigate=useNavigate()
    useEffect(()=>
    {
        fetch("http://localhost:8080/payment/status").then(async (response)=>
        {
            let fres=await response.json();
            fres=fres.data
            console.log(fres)
            setbuyer(fres.buyer)
            setamount(fres.amount);
            setpaymentid(fres.id)
            setstatus(fres.status)
            settitle(fres.title)
        })

        if(status=="Credit")
        {
            let formData={
                course:title,
                email:buyer
            }
            fetch('http://localhost:8080/addcoursetostudent', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then(async (response)=>
                {
                    response=await response.json();
                    if(response.status==true)
                    {
                        alert("Course is added successfully")
                    }
                })
        }
        
    })
    return(
        <div>
            <h2>Buyer :{buyer}</h2>
            <h2>Amount :{amount}</h2>
            <h2>payment id :{paymentid}</h2>
            <h2>status :{status}</h2>
            <button onClick={()=>navigate('/')}>Home </button>
        </div>
    )
}

export default PaymentReceipt;
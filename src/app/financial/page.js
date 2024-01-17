"use client"

import { useEffect } from "react"




export default function Financial(){
    useEffect(function (){
        window.location = 'http://localhost:3000/financial/distribution'
    },[])

    return (
        <div>
           

           {/* <h1> Financial </h1> */}
        </div>
    )
}
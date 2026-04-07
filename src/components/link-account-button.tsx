'use client'
import { Button } from "@/components/ui/button"
import React from "react"

const LinkAccountButton = () => {
    return (
        <Button onClick={async ()=>{
            const res = await fetch('/api/aurinko/auth-url?serviceType=Google')
            const data = await res.json()
            if (data.url) window.location.href = data.url
        }}>
            Link Account
        </Button>
    )
}

export default LinkAccountButton
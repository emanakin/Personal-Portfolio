import React, { useEffect, useState } from 'react'
import '@/styles/components/ExmapleComponent.css'

// make sure the ComponentName matches the file name (ex. ComponentName.jsx)
export default function ExmapleComponent({ prop1, prop2, prop3 = "defaultValue" }) {
    // constants & non-state variables
    const example = "hello"
    
    // useState variables
    const [foo, setFoo] = useState("bar")
    
    // useEffects & custom hooks
    useEffect(() => {
        // some code
    }, [dependencies])
    
    return (
        <>
            <h1>your component</h1>
            <button class="btn">Click me</button>
        </>
    )
}

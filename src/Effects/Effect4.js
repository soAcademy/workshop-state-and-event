import React, { useState, useEffect} from "react";

const EFfect4 = () => {
    const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(countdown - 1);
    }, 1000)

    countdown >1 || clearInterval(interval);

    return () => clearInterval(interval)
 }, [countdown])
 
 return (
    <>
        <p>Countdown: {countdown}</p>
    </>
 )
}

export default EFfect4;
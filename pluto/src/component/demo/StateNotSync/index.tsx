import {useEffect, useState} from "react";

export default function StateNotSync() {
    const [number, setNumber] = useState<number>(0);
    let timeout: any = null;

    const onSetNumber = () => {
        setNumber(number + 1);
    }

    const onTimeoutSetNumber = () => {
        timeout = setTimeout(() => {
            // setNumber(number + 1);
            console.log(`number值为${number}`)
        }, 2000);
    }

    useEffect(() => {
        return () => {
            clearTimeout(timeout);
        }
    })

    return (
        <div>
            <div>当前的值为： {number}</div>
            <button onClick={onSetNumber}>立即执行</button>
            <button onClick={onTimeoutSetNumber}>延迟执行</button>
        </div>
    )
}
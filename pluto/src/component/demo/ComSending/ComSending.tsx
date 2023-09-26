import React, {useRef, useState} from "react";

export default function ComSending() {
    const [isSending, setIsSending] = useState<boolean>(false);
    const [content, setContent] = useState<string>("");
    const inputRef: any = useRef();
    const timeoutIdRef: any = useRef();

    let sent = (): void => {
        window.alert("消息已发送");
        setIsSending(false);
        setContent("")
    }

    let handleSendClick = (): void => {
        setContent(inputRef.current.value);
        inputRef.current.value = "";
        timeoutIdRef.current = setTimeout(sent, 3000);
        setIsSending(true);
    }


    function handleCancelClick(): void {
        clearTimeout(timeoutIdRef.current);
        inputRef.current.value = content;
        setIsSending(false);
    }

    return (
        <>
            <div>
                <input type="text" ref={inputRef}/>
                <button onClick={handleSendClick} disabled={isSending}>{isSending ? "发送中..." : "发送"}</button>
                {isSending && <button onClick={handleCancelClick}>撤回</button>}
            </div>
        </>
    )
}
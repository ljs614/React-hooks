import { useEffect } from "react";



const useBeforeLeave = (onBefore) => {
    
    const handle = e => {
        if(typeof onBefore != "function") {
            return;
        } else {
            const { clientY } = e;
            if(clientY <= 0){
                onBefore();
            }
        }
    };
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, [])
};


export default useBeforeLeave;
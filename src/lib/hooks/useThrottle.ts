import { useEffect, useRef, useState } from "react";

export function useThrottle<T>(value: T, timeout = 500): T { 
    const [throttledValue, setThrottledValue] = useState<T>(value);
    const previousTimeExecuted = useRef(Date.now());

    useEffect(() => { 
        let interval: ReturnType<typeof setTimeout>; 

        if (Date.now() >= previousTimeExecuted.current + timeout) { 
            previousTimeExecuted.current = Date.now();
            setThrottledValue(value);
        } else {
            interval = setTimeout(() => {
                previousTimeExecuted.current = Date.now();
                setThrottledValue(value);
            }, timeout);
        }

        return (() => { 
            if (interval) { 
                clearInterval(interval)
            }
        });
    }, [value, timeout]);

    return throttledValue;
}
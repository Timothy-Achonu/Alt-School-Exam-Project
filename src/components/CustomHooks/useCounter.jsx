import { useState } from 'react';

export default function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue)
    const [valueToChangeCountWith, setValueTOChangeCountWith] = useState(1);
    function increase() {
        setCount(prevCount => prevCount + valueToChangeCountWith);
    }
    function decrease() {
        setCount(prevCount => prevCount - valueToChangeCountWith);
    }
    function reset() {
        setCount(0);
        setValueTOChangeCountWith(1);
    }
    function setCountValue(e) {
        let num = Number(e.target.value);
        if (String(num) === "NaN" || e.target.value === "") {
            setCount(count);
        }
        else {
            setCount(num);
        }
    }
    function setValue(e) {
        let num = Number(e.target.value);
        if (String(num) === "NaN" || e.target.value === "") {
            setValueTOChangeCountWith(count);
        }
        else {
            setValueTOChangeCountWith(num);
        }
    }
  return {count, increase, decrease, reset, setCountValue, setValue}
}

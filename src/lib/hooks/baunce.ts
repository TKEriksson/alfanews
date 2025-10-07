import { useEffect, useState } from "react";

export default function Baunce(value:string, delay:number) {

  const [bValue, setBValue] = useState<string>();

  useEffect(() => {    
  const baunce = setTimeout(() => {
    setBValue(value);
  }, delay);

    return () => {
      clearTimeout(baunce)
    }

  }, [value, delay]);

  return bValue;
}
import React from 'react'
import { useCallback, useState, useEffect } from 'react';
const names = [
    'tony', 'elias', 'fadi'
]
export const TextChange = () => {
    const [newName, setnewName] = useState("");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 1000);
        return () => clearInterval(intervalID);
    }, [shuffle])
  return (
    <div>
         <h1>name:{newName}</h1>
    </div>
  )
}

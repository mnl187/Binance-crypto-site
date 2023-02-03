import React, {useState} from "react";

export const CryptoPrice = () => {
    const [data, setData] = useState(null);

    if (data === null) {
        return <p>Wczytywanie danych....</p>
    }


    return <>
        <label htmlFor="">
            Wybierz pare kryptowalutową: <br/>
            <select name="" id="">

            </select>
        </label>
    </>
}
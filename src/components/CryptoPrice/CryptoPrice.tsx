import React, {useEffect, useState} from "react";

export const CryptoPrice = () => {
    const [data, setData] = useState(null);


    useEffect(() => {
        (async () => {
            const res = await fetch('https://api2.binance.com/api/v3/ticker/24hr');
            setData(await res.json());
        })();
    }, []);

    if (data === null) {
        return <p>Wczytywanie danych....</p>
    }


    return <>
        <label>
            Wybierz pare kryptowalutową: <br/>
            <select>

            </select>
        </label>
    </>;
}
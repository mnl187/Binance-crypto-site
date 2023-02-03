import React, {useEffect, useState} from "react";
import {BinanceOneCryptoPairData} from "../../types/crypto-data";

export const CryptoPrice = () => {
    const [data, setData] = useState<BinanceOneCryptoPairData[] | null>(null);


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
                {
                    data
                        .map(pair => (
                            <option
                                value={pair.symbol}
                                key={pair.symbol}>
                                {pair.symbol}
                            </option>
                        ))
                }
            </select>
        </label>
    </>;
}
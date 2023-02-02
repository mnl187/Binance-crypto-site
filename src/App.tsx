import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Dialog} from "./components/common/Dialog";

export const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Dialog>
                    <h1>Wstawić</h1>
                </Dialog>
            </header>
        </div>
    );
}

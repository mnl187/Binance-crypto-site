import React from "react";

import './Dialog.css';

interface Props {
    children: React.ReactNode;
    title?: string;
}

export const Dialog = (props: Props) => (
    <div className="Dialog__container">
        {
            props.title && <div className="Dialog__title">
                {props.title}
            </div>
        }
        <div className="Dialog__content">
            {props.children}
        </div>
    </div>
)
import React from "react";

export class Component<PROP, STATE> extends React.Component<PROP,STATE> {
    constructor(props : PROP, state : STATE) {
        super(props, state);
    }
}
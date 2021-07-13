import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class Index extends Component {
    constructor(props: object) {
        super(props);
    }

    render() {
        return (
            <>
                <head>
                    <title>Joseph Abbey</title>
                </head>
                <Navbar></Navbar>
            </>
        );
    }
}
export default Index;

import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import WYSIWYG from '../components/WYSIWYG';

class Index extends Component {
    constructor(props: object) {
        super(props);
    }

    render() {
        return (
            <>
                <head>
                    <title>Joseph Abbey - WYSIWYG</title>
                </head>
                <Navbar></Navbar>
                <WYSIWYG content="hello"></WYSIWYG>
            </>
        );
    }
}
export default Index;

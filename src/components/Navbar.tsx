import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Bookmark, GitHub, Youtube } from 'react-feather';

class comp extends Component {
    constructor(props: object) {
        super(props);
    }

    componentDidMount() {
        document.querySelectorAll('a').forEach((a) => {
            if (a.href == window.location.href) {
                a.classList.add('active');
            }
        });
    }

    render() {
        return (
            <Navbar bg="light" variant="light" expand="sm">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="/assets/blank.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Joseph Abbey
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/videos">Videos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link href="https://github.com/JosephAbbey">
                        <GitHub />
                    </Nav.Link>
                    <Nav.Link href="https://www.youtube.com/channel/UCsQs7FUahM7WjpbL9k7XthA">
                        <Youtube />
                    </Nav.Link>
                    <Nav.Link href="http://blog.abbey1.org.uk/index.php/technology/">
                        <Bookmark />
                    </Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}
export default comp;

import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import VideoCard from '../components/VideoCard';

const videos = require('/public/data/videos.json');

class Videos extends Component {
    constructor(props: object) {
        super(props);
    }

    render() {
        return (
            <>
                <head>
                    <title>Videos</title>
                </head>
                <Navbar></Navbar>
                {videos.items.map((video: any) => (
                    <VideoCard video={video}></VideoCard>
                ))}
            </>
        );
    }
}
export default Videos;

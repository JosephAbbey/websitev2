import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

interface VideoCardProps {
    video: any;
}

class VideoCard extends Component<VideoCardProps> {
    constructor(props: VideoCardProps) {
        super(props);
    }

    render() {
        return (
            <Card
                bg="light"
                style={{
                    width: '18rem',
                    margin: '0.25em',
                    display: 'inline-block',
                }}
            >
                <Card.Img
                    variant="top"
                    src={this.props.video.snippet.thumbnails.high.url}
                />
                <Card.Body>
                    <Card.Title>
                        {this.props.video.snippet.title.replace(/\#\w+/g, '')}
                    </Card.Title>
                    <Card.Text>
                        {this.props.video.snippet.description.substring(
                            0,
                            100
                        ) + '...'}
                    </Card.Text>
                    <Button
                        variant="primary"
                        href={
                            'https://youtube.com/watch?v=' +
                            this.props.video.snippet.resourceId.videoId
                        }
                    >
                        Watch Now
                    </Button>
                </Card.Body>
            </Card>
        );
    }
}
export default VideoCard;

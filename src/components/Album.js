import React from 'react';
import { Card, Button } from 'react-bootstrap';
import ButtonNavigate from './ButtonNavigate';

const Album = (props) => (<div>
    {props.albums && props.albums.map((album) => <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://via.placeholder.com/150/24f355" />
        <Card.Body>
            <Card.Title>{album.title}</Card.Title>
            <Button variant="primary" onClick={() => props.viewPhotos(album.id)}>View Photos</Button>
        </Card.Body>
    </Card>)}
</div>);

export default Album;
import React, { Component } from 'react';

import Photos from '../components/Photo';

class PhotosContainer extends Component {
    constructor() {
        this.state = {
            photos: []
        };
    }

    componentDidMount() {
        this.fetchPhotos();
    }
    fetchPhotos() {
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=1')
            .then(res => res.json())
            .then(data => this.setState({ photos: data }))
            .catch(console.log)
    }
    render() {
        return <Photos photos={this.state.photos} />;
    }
}

export default PhotosContainer;
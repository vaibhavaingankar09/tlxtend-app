import React, { Component } from 'react';
import Album from '../components/Album';

class AlbumContainer extends Component {

    constructor() {
        super();
        this.state = {
            albums: [],
        };
    }

    componentDidMount() {
        this.fetchAlbums();
    }

    fetchAlbums() {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(res => res.json())
            .then((data) => {
                this.setState({ albums: data })
            })
            .catch(console.log)
    }

    viewPhotos(id) {
        this.props.history.push(`/albumDetails/${id}`)
    }

    render() {
        return <Album albums={this.state.albums} viewPhotos={this.viewPhotos} />
    }
}

export default AlbumContainer;
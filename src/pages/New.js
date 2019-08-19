import React, { Component } from 'react';
import api from '../services/api';
import Header from '../components/Header'

import '../assets/css/New.css';

class New extends Component {
    state = {
        image: null,
        author: null,
        place: null,
        description: null,
        hashtags: null,
    };

    handleSubmit = e => {
        e.preventDefault();

        const data = new FormData();

        data.append('image', this.state.image);
        data.append('author', this.state.author);
        data.append('place', this.state.place);
        data.append('description', this.state.description);
        data.append('hashtags', this.state.hashtags);

        (async () => {
            await api.post('posts', data);
          })();

        this.props.history.push('/');
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleImagechenge = e => {
        this.setState({ image: e.target.files[0] });
    }

    render() {
        return(
            <section>
                <Header></Header>
            <form id="new-post" onSubmit={this.handleSubmit}>

                <input type="file"
                    onChange={this.handleImagechenge}
                />
               
                <input 
                    type="text"
                    name="author"
                    placeholder="Autor do post"
                    onChange={this.handleChange}
                    value={this.setState.author}
                />

                <input 
                    type="text"
                    name="place"
                    placeholder="Local do post"
                    onChange={this.handleChange}
                    value={this.setState.place}
                />

                <input 
                    type="text"
                    name="description"
                    placeholder="Descrição do post"
                    onChange={this.handleChange}
                    value={this.setState.description}
                />
                
                <input 
                    type="text"
                    name="hashtags"
                    placeholder="Hashtags do post"
                    onChange={this.handleChange}
                    value={this.setState.hashtags}
                />
                <button type="submit">Enviar</button>

            </form>
            </section>

        );
    }
}

export default New;
import React, { Component } from 'react'

const apiKey = `AIzaSyDgHS5U2g0Hu7uriioyuNYDq0b9j92M8nU`;
const userId = 109887411461545528192;
const url = `https://www.googleapis.com/books/v1/users/${userId}/bookshelves/4/volumes?key=${apiKey}`

export class Books extends Component {
   state = {
       data: {}
   }
    componentDidMount = () => {
        fetch(url).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({data: data});
            console.log(data);
        })
    }
   
    render() {
        return (
            <div>
                Books
            </div>
        )
    }
}

export default Books

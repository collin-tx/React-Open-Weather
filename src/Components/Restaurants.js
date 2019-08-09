import React, { Component } from 'react'

const apiKey = `00990c8995281e7b45d188c330d6e98b`;

export class Restaurants extends Component {
    state = {
        data: {}
    }

    componentDidMount = () => {
        fetch(`https://developers.zomato.com/api/v2.1/collections?city_id=276&apikey=${apiKey}&count=3`)
        .then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({data: data});
            console.log(this.state.data.collections);
        });
    }
    render() {
        return (
            <div id="restaurants-div" className="div">
                <h2>Suggestions from Zomato: </h2>
                <li className="list-group-item">
                    <h5>{this.state.data.collections && this.state.data.collections[0].collection.title}</h5>
                    <p>{this.state.data.collections && this.state.data.collections[0].collection.description}</p>
                    <img src={this.state.data.collections && this.state.data.collections[0].collection.image_url} />
                </li>
                <li className="list-group-item">
                    <h5>{this.state.data.collections && this.state.data.collections[1].collection.title}</h5>
                    <p>{this.state.data.collections && this.state.data.collections[1].collection.description}</p>
                    <img src={this.state.data.collections && this.state.data.collections[1].collection.image_url} />
                </li>
                <li className="list-group-item">
                    <h5>{this.state.data.collections && this.state.data.collections[2].collection.title}</h5>
                    <p>{this.state.data.collections && this.state.data.collections[2].collection.description}</p>
                    <img src={this.state.data.collections && this.state.data.collections[2].collection.image_url} />
                </li>
            </div>
        )
    }
}

export default Restaurants

import React, { Component } from 'react';

const apiKey = `8b28caf3193042a7980a9befbf486d36`;

export default class News extends Component {
	state = {
		url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
		data: {}
	}

	componentDidMount = () => {
		fetch(this.state.url).then((response) => {
			return response.json();
		}).then((data) => {
			this.setState({
				data: data
			})
		})
	}

	onClick = (e) => {
		console.log(this.state.data.articles[0])
	}

	render() {
		return (
			<div id="news-div" className="div">
				<h2>Here's the news!</h2>
				<li className="list-group-item text-left">
					<h5>{this.state.data.articles && this.state.data.articles[0].title}</h5>
					<p>{this.state.data.articles && this.state.data.articles[0].author}</p>
					<button onClick={this.onClick}>click</button>
				</li>
				<li className="list-group-item text-left">
					<h5>{this.state.data.articles && this.state.data.articles[1].title}</h5>
					<p>{this.state.data.articles && this.state.data.articles[1].author}</p>
					<button onClick={this.onClick}>click</button>
				</li>
				<li className="list-group-item text-left">
					<h5>{this.state.data.articles && this.state.data.articles[2].title}</h5>
					<p>{this.state.data.articles && this.state.data.articles[2].author}</p>
					<button onClick={this.onClick}>click</button>
				</li>
			</div>
		);
	}
}

import React, { Component } from 'react';
import pet from "@frontendmasters/pet";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount () {
    pet.animal(this.props.id)
    .then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos[0] ? animal.photos[0].medium : "https://via.placeholder.com/150/333",
        preed: animal.breeds.primary,
        age: animal.age,
        gender: animal.gender,
        status: animal.status,
        loading: false
      })
    });
  }
  render() {
    if (this.state.loading){
      return(<div>
        loading.....
      </div>)
    }
    return (
      <div className="search-params searchlist">
        <h2>{this.state.name}</h2>
        <div className="animal">
          <div className="avatar">
            <img src={this.state.media} />
          </div>
          <div className="info">
            <ul>
              <li>Animal: {this.state.animal}</li>
              <li>Age: {this.state.age}</li>
              <li>Gender: {this.state.gender}</li>
              <li>Status: {this.state.status}</li>
              <li>Preed: {this.state.preed}</li>
              <li>Location: {this.state.location}</li>
              <li>
                description
                <p>{this.state.description}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}


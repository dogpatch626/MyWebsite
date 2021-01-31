import React, { Component } from "react";
var fetch = require("node-fetch");
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      img: " ",
      pokemon: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  decrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  async image() {
    let imger = "";

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${this.state.pokemon}`
      );
      const pokeDa = await response.json();
      console.log(pokeDa);
      let imger = pokeDa.sprites.front_default;
      this.setState({ img: imger });
      console.log(imger);
    } catch (error) {
      alert("no pokemon");
    }
    //imger = imger.toString();
  }

  //
  handleChange(event) {
    this.setState({ pokemon: event.target.value });
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.pokemon);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        {/* <p style={{ textAlign: "center" }}>
          {" "}
          this is our count: {this.state.counter}{" "}
        </p>
        <button onClick={this.increment}>Increment </button>
        <button onClick={this.decrement}>Decrement</button> */}

        <center>
          <button style={{ textAlign: "center" }} onClick={() => this.image()}>
            {" "}
            <img
              style={{ height: "200px", width: "200px" }}
              src={this.state.img}
              alt="no"
            />{" "}
          </button>
        </center>
        <form onSubmit={this.handleSubmit} style={{ textAlign: "center" }}>
          {/* input start */}
          <label>
            Name:
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div> // input end
    );
  }
}

export default Counter;

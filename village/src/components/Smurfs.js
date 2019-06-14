import React, { Component } from "react";
import axios from "axios";
import Smurf from "./Smurf";

class Smurfs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => this.setState({ smurfs: res.data }));
  }

  deleteSmurf = id => {
    if (window.confirm("Are you sure you want to delete this smurf")) {
      axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => this.setState({ smurfs: res.data }));
    }
  };

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.state.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.deleteSmurf}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;

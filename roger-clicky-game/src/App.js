import React, {Component} from "react";
import Roger from "./components/Roger-Cards/roger";
import Wrapper from "./components/Wrapper/wrapper.js";
import Navbar from "./components/Navbar/navbar.js";
import Header from "./components/Header/header.js";
import personas from "./personas.json";

class App extends Component {
  state = {
    personas
  };

  render() {
    return(
        <Wrapper>
          <Navbar />
          <Header>How well do you know Roger?</Header>
          {this.state.personas.map(persona => (
            <Roger
              id={persona.id}
              key={persona.id}
              name={persona.name}
              image={persona.image}
              role={persona.role}
            />
          ))}
        </Wrapper>
    );
  }
}

export default App;

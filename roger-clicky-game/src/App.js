import React, {Component} from "react";
import Roger from "./components/roger";
import personas from "./personas.json";

class App extends Component {
  state = {
    personas
  };

  render() {
    return(
      <div>
        {this.state.personas.map(persona => (
          <Roger
            id={persona.id}
            key={persona.id}
            name={persona.name}
            image={persona.image}
            role={persona.role}
          />
        ))}
      </div>
    );
  }
}

export default App;

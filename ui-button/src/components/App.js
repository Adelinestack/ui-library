import React, { Component } from 'react';
import Button from './Button';
import './App.css';

export default class App extends Component {
  state = { log: [] };

  handleClick = () => this.updateLog('Button received click with mouse');

  handleKeyPress = e => {
    if (e.charCode === 32 || e.charCode === 13) {
      // Prevent the default action to stop scrolling when space is pressed
      e.preventDefault();
      this.updateLog('Button received click with keyboard');
    }
  };

  updateLog = message => this.setState({ log: [message, ...this.state.log] });

  render() {
    return (
      <div className="App">
        <div>
          <Button content="Click here" />
        </div>

        <div>
          <Button content="Primary" primary />
          <Button content="Secondary" secondary />
        </div>

        <div>
          <Button icon="globe" />
        </div>
        <div>
          <Button content="Standard" basic />
          <Button basic color="red" content="Red" />
          <Button basic color="orange" content="Orange" />
          <Button basic color="yellow" content="Yellow" />
          <Button basic color="olive" content="Olive" />
          <Button basic color="green" content="Green" />
          <Button basic color="teal" content="Teal" />
          <Button basic color="blue" content="Blue" />
          <Button basic color="violet" content="Violet" />
          <Button basic color="purple" content="Purple" />
          <Button basic color="pink" content="Pink" />
          <Button basic color="brown" content="Brown" />
          <Button basic color="grey" content="Grey" />
          <Button basic color="black" content="Black" />
        </div>
        <div>
          <Button disabled>Disabled</Button>
        </div>
        <div>
          <Button loading>Loading</Button>
          <Button basic loading>
            Loading
          </Button>
          <Button loading primary>
            Loading
          </Button>
          <Button loading secondary>
            Loading
          </Button>
        </div>
        <div>
          <Button size="mini">Mini</Button>
          <Button size="tiny">Tiny</Button>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
          <Button size="big">Big</Button>
          <Button size="huge">Huge</Button>
          <Button size="massive">Massive</Button>
        </div>
        <div>
          <Button circular icon="cogs" />
        </div>
        <div>
          <Button
            attached="bottom"
            content="Click"
            onClick={this.handleClick.bind(this)}
            onKeyPress={this.handleKeyPress.bind(this)}
          />
          <div>
            {this.state.log.map((e, i) => (
              <p key={i}>{e}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

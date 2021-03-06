import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '12e3fd34'
        },
        {
          name: 'Frank',
          id: '4532fdf'
        },
        {
          name: 'Jacky',
          id: 'wer3434'
        },
        {
          name: 'Andrei',
          id: '3fdf9d'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
            );
          })
        }
      </div>
    );
  }  
}

export default App;

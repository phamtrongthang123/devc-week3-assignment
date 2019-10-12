import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import { GameBoard } from './GameBoard';
import CHOICES from './data';
import styles from './styles'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 'title game',
      name: '',
      playerChoice: '',
      playerChoiceimg: require('./assets/you.png'),
      computerChoice: '',
      computerChoiceimg: require('./assets/computer.jpg'),
      gameStatus: 'VS',
    };
  }
  randomComputerChoice = () => CHOICES[Math.floor(Math.random() * CHOICES.length)];
  afterUserChoice = choice => {
    const compChoice = this.randomComputerChoice().name;
    let result;
    if (choice === 'Rock') {
      result = compChoice === 'Scissors' ? 'Victory!' : 'Defeat!';
    }
    if (choice === 'Paper') {
      result = compChoice === 'Rock' ? 'Victory!' : 'Defeat!';
    }
    if (choice === 'Scissors') {
      result = compChoice === 'Paper' ? 'Victory!' : 'Defeat!';
    }

    if (choice === compChoice) result = 'Tie game!';

    var obj = CHOICES.find(c => c.name === choice);
    let playerImg;
    if (obj != undefined) {
      playerImg = obj.uri;
    }
    obj = CHOICES.find(c => c.name === compChoice);
    let compImg;
    if (obj != undefined) {
      compImg = obj.uri;
    }
    this.setState({
      playerChoice: choice,
      computerChoice: compChoice,
      playerChoiceimg: playerImg,
      computerChoiceimg: compImg,
      gameStatus: result,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerResult}>
          <GameBoard
            player = {this.state.gameStatus=='VS'?'':'Computer'}
            choice={this.state.computerChoice}
            choiceimg={this.state.computerChoiceimg}
          />
          <Text style={[styles.textStatus,{color: this.state.gameStatus=='Victory!'? 'green':
          this.state.gameStatus =='Defeat!'?'red':'black'
        }]}>{this.state.gameStatus}</Text>
          <GameBoard
            player= {this.state.gameStatus == 'VS' ? '' : 'YOU'}
            choice={this.state.playerChoice}
            choiceimg={this.state.playerChoiceimg}
          />
        </View>
        <View style={styles.containerButton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.afterUserChoice('Rock')}>
            <View style={styles.viewTextCenter}>
              <Text style={styles.textButtonStyle}>Rock</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.afterUserChoice('Paper')}>
            <View style={styles.viewTextCenter}>
              <Text style={styles.textButtonStyle}>Paper</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.afterUserChoice('Scissors')}>
            <View style={styles.viewTextCenter}>
              <Text style={styles.textButtonStyle}>Scissors</Text>
            </View>

          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
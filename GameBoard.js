import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import CHOICES from './data'
import styles from './styles'
class GameBoard extends React.Component {
  render() {
    return (
      <View style={styles.containerUI}>
        <Text>{this.props.player == 'Computer' ? '' : this.props.choice}</Text>
        <View style={styles.choicecontainer}>
          <View style={styles.leftavatar}>

            <Image style={this.props.player=='Computer'?styles.avatar:styles.avatarempty} source={require('./assets/computer.jpg')} />
          </View>
          <View style={styles.midchoice}>

            <Image style={styles.choiceImg} source={this.props.choiceimg} />
          </View>
          <View style={styles.rightavatar}>
            <Image style={this.props.player=='YOU'?styles.avatar:styles.avatarempty} source={require('./assets/player.jpg')} />
          </View>
        </View>
        <Text>{this.props.player == 'YOU' ? '' : this.props.choice}</Text>
      </View>
    );
  }
};

export { GameBoard } 
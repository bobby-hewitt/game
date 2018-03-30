import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { nextImage, prevImage, nextLabel, prevLabel } from '../../actions/image'
import { increaseScore, addPoints, removePoints, resetPoints, setHighScore } from '../../actions/score'
import { updateImages } from '../../actions/http'
import Home from '../../containers/Home'

import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  View
} from 'react-native';

import MashUp from '../MashUp'

class GameOver extends Component {

  constructor(props){
    super(props)
    this.state = {
      theme: 'light'
    }
  }

  componentWillMount(){
    this.setState({score: this.props.score})
    if (this.props.score > this.props.highScore){
      //high score
      this.props.setHighScore(this.props.score)
      this.setState({highScore: true})
    }
    this.props.resetPoints()
    this.props.nextImage()
  }

  onMashUp(){
     this.props.navigator.push({
      component: Home,
      navigationBarHidden: true,
    })
  }



  render() {
    return (
      <View style={styles.container}>
      

        <View style={styles.highScoreContainer}>
            <Text style={styles.newhighScore}>{this.state.highScore ? 'NEW HIGH SCORE!' : 'GAME OVER'}</Text>
            <Text style={styles.highScore}>{this.state.score}</Text>
          </View>
    
      <View style={styles.playAgainContainer}>
        <MashUp 
        copy1="Play"
        copy2="Again"
        onMashUp={this.onMashUp.bind(this)}
        navigator={this.props.navigator}
        
          />
      </View>
    </View>
    );
  }
}

const mapStateToProps = state => ({
  lives: state.score.lives,
  score: state.score.score,
  points: state.score.points,
  image: state.data[state.image.imageIndex],
  imageIndex: state.image.imageIndex,
  labelIndex: state.image.imageIndex,
  images: state.data,
  highScore: state.score.highScore,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  nextImage, 
  prevImage, 
  nextLabel, 
  prevLabel,
  updateImages,
  setHighScore,
  increaseScore,
  addPoints,
  resetPoints,
  removePoints,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOver)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  highScoreContainer:{
    flex:1,
    width:Dimensions.get('window').width,
    marginBottom:0,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'rgb(252,232,78)'
  },
  newhighScore:{
     fontFamily:'KannadaSangamMN',
    color:'rgb(66,65,67)',
    textAlign:'center',
     fontWeight: "900",
     fontSize:40,
     lineHeight:40,
     fontWeight:'700'
  },
  highScore:{
     fontFamily:'KannadaSangamMN',
    color:'rgb(66,65,67)',
  textAlign:'center',
     fontWeight: "900",
     fontSize:40,
     lineHeight:40,
     fontWeight:'700'
  },
  scoreContainer:{
    flex:1,
    flexDirection:'column'
  },
  playAgainContainer:{
     flex:1,
    flexDirection:'column'
  },
  text:{
    backgroundColor:'transparent'
  },
  image:{
    flex:2,
    height:Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  imageGradient: {

  }
 
});




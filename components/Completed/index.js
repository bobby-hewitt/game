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
  Animated,
  Image,
  Dimensions,
  View
} from 'react-native';

import MashUp from '../MashUp'

class Loading extends Component {

  constructor(props){
    super(props)
    this.state = {
      fadeAnim: new Animated.Value(0),
      seconds: 0,
      minutes: 0,
      hours: 0,
    }
  }

  componentWillMount(){
    this.interval = setInterval(this.setTime.bind(this), 1000)
    this.setTime()
  }

  componentDidMount(){
    this.animate(this.state.fadeAnim, 1, 500)
  }

  setTime(){
    var now = (new Date).getTime()
    var diff = (1000 * 60 * 60 * 12) - (now - parseInt(this.props.updateId))
    var seconds = Math.floor(diff / 1000)
    var hours = Math.floor((seconds / 60) / 60)
    console.log(hours)
    var minutes = Math.floor((seconds / 60) % 60)
    seconds = Math.floor(seconds % 60)
    this.setState({seconds, minutes, hours})

    console.log(seconds)

  }

  componentWillUnmount(){
    clearInterval(this.interval)
  }

  animate(property, toValue, duration){
    console.log('animating', property)
    Animated.timing(          
      property,    
      {toValue, duration}           
    ).start()
  }


  // componentWillReceiveProps(np){
  //   if(np.isLoadingTransition && !this.props.isLoadingTransition){
  //     this.animate(this.state.fadeAnim, 0, 500)
  //   }
  // }



  render() {
    return (
      <View style={styles.container}>
      <Image source={require('../../assets/images/loading.jpeg')} style={styles.absolute} />
      <Animated.View style={[styles.textContainer, {opacity: this.state.fadeAnim}]}>
        <Text style={styles.text}>Daily puzzles complete!</Text>
        <Text style={styles.infoText}>new puzzles available in </Text>
         <Text style={styles.infoText}>{this.state.hours} hr, {this.state.minutes} mins</Text>
      </Animated.View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  lives: state.score.lives,
  score: state.score.score,
  points: state.score.points,
  image: state.data.images[state.image.imageIndex],
  imageIndex: state.image.imageIndex,
  labelIndex: state.image.imageIndex,
  images: state.data.images,
  word: state.letters.word,
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
)(Loading)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top:0,
    left:0,
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer:{
    backgroundColor:'rgba(16,16,16,0.7)',
    position:'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0,
    alignItems:'center',
    justifyContent:'center',

  },
  imageOverlay:{
    position:'absolute',
    top:0,
    left: 0,
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width,
    backgroundColor:'rgba(16,16,16,0.3)'
  },
  absolute:{
    position:'absolute',
    top:0,
    left: 0,
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width,
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
    fontFamily:'BacktoBlackDemo',
    color:'#fefefe',
    textAlign:'center',
    lineHeight:40,
    fontWeight: "900",
    fontSize:30,
    fontWeight:'700',
    backgroundColor:'transparent'
  },
    infoText:{
    
    color:'#fefefe',
    textAlign:'center',
    fontWeight: "900",
    fontSize:30,
    fontWeight:'700',
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




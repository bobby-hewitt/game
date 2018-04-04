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
      scaleAnim: new Animated.Value(1),
      fadeAnim: new Animated.Value(1),

    }
  }

  componentDidMount(){
    this.animate(this.state.scaleAnim, 1.5, 5000)
  }

  animate(property, toValue, duration){
    console.log('animating', property)
    Animated.timing(          
      property,    
      {toValue, duration}           
    ).start()
  }


  componentWillReceiveProps(np){
    if(np.isLoadingTransition && !this.props.isLoadingTransition){
      this.animate(this.state.fadeAnim, 0, 500)
    }
  }



  render() {
    return (
      <Animated.View style={styles.container}>
      <Animated.Image source={require('../../assets/images/loading.jpeg')} style={[styles.absolute, {transform: [{scale: this.state.scaleAnim}], opacity: this.state.fadeAnim}]} />
      <Text style={styles.text}>Loading</Text>
      </Animated.View>
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
    fontWeight: "900",
    fontSize:40,
    lineHeight:Dimensions.get('window').height,
    fontWeight:'700',
    zIndex:1,
    height:Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position:'absolute',
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




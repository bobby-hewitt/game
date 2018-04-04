import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { nextImage, prevImage, nextLabel, prevLabel } from '../../actions/image'
import { setImageIsLoaded } from '../../actions/ui'
import { increaseScore, addPoints, removePoints, resetPoints } from '../../actions/score'
import { updateImages } from '../../actions/http'
import BackButton from '../BackButton'
import Score from '../ScoreContainer'
import Points from '../Points'
import NewLife from '../NewLife'
import SelectDifficulty from '../SelectDifficulty'
import {
  Platform,
  StyleSheet,
  Text,
  Animated,
  Image,
  Dimensions,
  View
} from 'react-native';
import LabelContainer from './LabelContainer'

class SceneContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      theme: 'light',
      posAnim: new Animated.Value(1),
      fadeAnim: new Animated.Value(1),
    }
  }

  componentWillMount(){
    this.props.resetPoints()
  }

  componentWillReceiveProps(np){
    if (!np.showImage && this.props.showImage){
      this.animateImage(0,0)
    } else if (np.showImage && !this.props.showImage && this.props.imageIsLoaded) {
      console.log('should animate in')
      this.animateImage(1,1) 
    } 
    else if (np.imageIsLoaded && !this.props.imageIsLoaded){
      console.log('should animate in')
      this.animateImage(1,1)
    }
  }

  animateImage(opacity, position){
   
     Animated.parallel([
        Animated.timing(          // Uses easing functions
          this.state.posAnim,// The value to drive
          {toValue: position, duration:300}            // Configuration
        ),
        Animated.timing(          // Uses easing functions
          this.state.fadeAnim,    // The value to drive
          {toValue: opacity, duration:300}            // Configuration
        )
      ]).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={{opacity: this.state.fadeAnim, transform: [{scale: this.state.posAnim}]}}>
          <Image source={{uri: this.props.image.image}} style={styles.image} onLoadEnd={() => this.props.setImageIsLoaded()}/>
        </Animated.View>
        <BackButton navigator={this.props.navigator}/> 
        <Score score={this.props.score} highScore={this.props.highScore}  lives={this.props.lives}/>
        {this.props.points.map((p, i) => {
          return(
            <Points key={i} index={i} value={p}/>
          )
        })}
        {this.props.newLives.map((l, i) => {
          return(
            <NewLife key={i} />
          )
        })}
        {!this.props.difficulty &&
          <SelectDifficulty />
        }
        {this.props.difficulty &&
          <LabelContainer navigator={this.props.navigator} />  
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  difficulty: state.score.difficulty,
  imageIsLoaded: state.ui.imageIsLoaded,
  highScore: state.score.highScore,
  newLives: state.score.newLives,
  lives: state.score.lives,
  score: state.score.score,
  points: state.score.points,
  image: state.data[state.image.imageIndex],
  imageIndex: state.image.imageIndex,
  labelIndex: state.image.imageIndex,
  images: state.data,
  showImage: state.ui.showImage,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  nextImage, 
  prevImage, 
  nextLabel, 
  prevLabel,
  updateImages,
  increaseScore,
  addPoints,
  resetPoints,
  removePoints,
  setImageIsLoaded
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SceneContainer)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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




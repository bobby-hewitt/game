import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { nextImage, prevImage, nextLabel, prevLabel } from '../../actions/image'
import { increaseScore } from '../../actions/score'
import { updateImages } from '../../actions/http'
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Animated,
  Easing,
  Dimensions,
  View
} from 'react-native';
// import LabelContainer from './LabelContainer'

class AnimateInOutView extends Component {

  constructor(props){
    super(props)
    this.state = {
       fadeAnim: new Animated.Value(1),
       marginLeft: new Animated.Value(0),
    }
  }

  componentWillReceiveProps(np){
    console.log('isVisible')
    if (np.isVisible && !this.props.isVisible){
      this.animateInOut(1)
    } else if(!np.isVisible && this.props.isVisible) {
      this.animateInOut(0)
    }
    if (np.incorrectToggle !== this.props.incorrectToggle){
      console.log('incorrect')
      this.animateOnIncorrect()
    }
  }

  animateOnIncorrect(){
    Animated.sequence([
      Animated.timing(          // Uses easing functions
        this.state.marginLeft,    // The value to drive
        {toValue: 30, duration:25}            // Configuration
      ),
      Animated.timing(          // Uses easing functions
        this.state.marginLeft,    // The value to drive
        {toValue: -30, duration:50}            // Configuration
      ),
      Animated.timing(          // Uses easing functions
        this.state.marginLeft,    // The value to drive
        {toValue: 0, duration:25}            // Configuration
      )
    ]).start(); 
  }


  animateInOut(toValue){
     Animated.spring(          // Uses easing functions
       this.state.fadeAnim,    // The value to drive
       {toValue, duration:200}            // Configuration
     ).start(); 
  }



  render() {
    return (
      <Animated.View style={{opacity: this.state.fadeAnim, alignItems:'center'}}>
        <Animated.View style={{marginLeft:this.state.marginLeft}}>
        {this.props.children}
        </Animated.View>
      </Animated.View>
    );
  }
}

const mapStateToProps = state => ({
  score: state.score,
  image: state.data[state.image.imageIndex],
  imageIndex: state.image.imageIndex,
  labelIndex: state.image.imageIndex,
  images: state.data
})

const mapDispatchToProps = dispatch => bindActionCreators({
  nextImage, 
  prevImage, 
  nextLabel, 
  prevLabel,
  updateImages,
  increaseScore,
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnimateInOutView)

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




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

export default class Letter extends Component {

  constructor(props){
    super(props)
    this.state = {
       scaleAnim: new Animated.Value(1),
    }
  }

  componentWillReceiveProps(np){
   if(!np.lastLetter && this.props.lastLetter){
        this.animateScale(1)
        console.log('last letter')
    } else if (np.lastLetter && !this.props.lastLetter){
      this.animateScale(1.5)
    }
  }

  componentDidMount(){
    if(this.props.lastLetter){
      this.animateScale(2)
      console.log('last letter')
    }
  }



  animateScale(toValue){
     Animated.spring(          // Uses easing functions
       this.state.scaleAnim,    // The value to drive
       {toValue, duration:200}            // Configuration
     ).start(); 
  }



  render() {
    return (
      <Animated.View style={{transform: [{scale: this.state.scaleAnim}] }}>
        <Text style={styles.letter}>{this.props.text}</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  letter: {
    fontFamily:'KannadaSangamMN',
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: 'black',
    shadowOpacity: 0.6,
    borderWidth:2,
    borderStyle: 'solid',
    borderColor:'#959595',
    backgroundColor:'#fefefe',
    color:'black',
    width:30,
    lineHeight:26,
    height:40,
    fontSize: 20,
    textAlign: 'center',
    margin: 3,
    padding:4,
  },
});




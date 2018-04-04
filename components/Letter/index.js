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
      this.animateScale(1.7)
    }
  }

  componentDidMount(){
    if(this.props.lastLetter){
      this.animateScale(1.3)
      console.log('last letter')
    }
  }



  animateScale(toValue){
    Animated.sequence([
      Animated.timing(          
         this.state.scaleAnim,    
         {toValue, duration:200}           
      ),
      Animated.timing(         
         this.state.scaleAnim,  
         {toValue: 1, duration:200}   
      )
    ]).start(); 
  }



  render() {
    return (
      <Animated.View style={{transform: [{scale: this.state.scaleAnim}], paddingHorizontal:2 }}>
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
    borderRadius:3,
    paddingTop:3,
    backgroundColor:'#fefefe',
    color:'black',
    width:26,
    lineHeight:26,
    height:35,
    fontSize: 20,
    textAlign: 'center',
    margin: 3,
  },
});




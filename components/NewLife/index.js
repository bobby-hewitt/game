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
  Dimensions,
  Easing,
  View
} from 'react-native';
// import LabelContainer from './LabelContainer'

export default class NewLife extends Component {

  constructor(props){
    super(props)
    this.state = {
      right: Math.floor(Math.random()*Dimensions.get('window').width/4) + Dimensions.get('window').width/2 ,
      posAnim: new Animated.Value(0),
      fadeAnim: new Animated.Value(1),
    }
  }


  componentDidMount(){
    Animated.parallel([
        Animated.timing(          // Uses easing functions
          this.state.posAnim,// The value to drive
          {toValue: -200, duration:1500}            // Configuration
        ),
        Animated.timing(          // Uses easing functions
          this.state.fadeAnim,    // The value to drive
          {toValue: 0, duration:500, delay:1000}            // Configuration
        )
      ]).start();
  }



  



  render() {
    
    return (
      <Animated.View style={{opacity: this.state.fadeAnim, transform: [{translateY: this.state.posAnim}], position:'absolute', top:200, right:this.state.right}}>
        <View style={styles.container}>
          <Image resizeMode="contain" style={styles.image} source={require('../../assets/images/heart.png')}/>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  letter: {
    fontFamily:'KannadaSangamMN',
    color:'rgb(66,65,67)',
    fontSize: 30,
    textAlign: 'center',
    lineHeight:50,
  },
  image:{
    width:40,
    height:40,
  },
  container: {
    position:'absolute',
    top:100,
    left:100,
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: 'black',
    shadowOpacity: 0.6,
    
    width:50,
    
    height:50,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center'
  },
  
});




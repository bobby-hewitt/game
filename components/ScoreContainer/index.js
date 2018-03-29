import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react';

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

export default class Score extends Component {

  constructor(props){
    super(props)
    this.state = {
       scaleAnim: new Animated.Value(1),
    }
  }

  componentWillReceiveProps(np){
   // if(!np.lastLetter && this.props.lastLetter){
   //      this.animateScale(1)
   //      console.log('last letter')
   //  } else if (np.lastLetter && !this.props.lastLetter){
   //    this.animateScale(1.5)
   //  }
  }

  componentDidMount(){
    setInterval(() => {
      console.log(this.props.score)
    },1000)
  }



  animateScale(toValue){
     Animated.spring(          // Uses easing functions
       this.state.scaleAnim,    // The value to drive
       {toValue, duration:200}            // Configuration
     ).start(); 
  }



  render() {
    return (
      <View style={styles.container}>
      <View style={styles.livesContainer}>
        <Animated.View style={{transform: [{scale: this.state.scaleAnim}] }}>
          


          <View style={styles.row}>
            <Image resizeMode="contain" source={require('../../assets/images/heart.png')} style={styles.heart} />
            <Text style={styles.livesText}>{this.props.lives}</Text>
          </View>
        </Animated.View>
        
        </View>
        <View style={styles.scoreContainer}>
        <Image resizeMode="contain" source={require('../../assets/images/coin.png')} style={styles.heart} />
          <Text style={styles.livesText}>{this.props.score}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width:120,
    position:'absolute',
    top:30,
    right:15,
    flexDirection:'column'
  },
  scoreContainer:{
    height:40,
    flexDirection:'row',
    backgroundColor:'rgb(77,179,229)',
    alignItems:'center',
    justifyContent:'center'
  },
  livesContainer:{
    height:40,
    flexDirection:'row',
    backgroundColor:'rgb(66,65,67)',
    paddingHorizontal:10,
    alignItems:'center',
    justifyContent:'center'
  },
  row:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  heart:{
    position:'absolute',
    left:10,
    top:10,
    width:20,
    height:20,
    marginRight:5,
    
  },
  livesText:{
    fontFamily:'KannadaSangamMN',
    color:'white',
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 0.6,
     fontWeight: "900",
     fontSize:20,
     lineHeight:40,
        
  },
  text: {
    fontFamily:'KannadaSangamMN',
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 0.6,
    color:'white',
    fontWeight:"900",
    fontSize: 30,  },
});




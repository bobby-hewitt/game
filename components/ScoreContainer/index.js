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




  animateScale(toValue){
     Animated.spring(          // Uses easing functions
       this.state.scaleAnim,    // The value to drive
       {toValue, duration:200}            // Configuration
     ).start(); 
  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.highScoreContainer}>
          <Image resizeMode="contain" source={require('../../assets/images/trophy.png')} style={styles.heart} />
          <Text style={styles.livesText}>{this.props.highScore}</Text>
        </View>
      <View style={styles.livesContainer}>
        
          


          
            <Image resizeMode="contain" source={require('../../assets/images/heart.png')} style={styles.heart} />
            <Text style={styles.livesText}>{this.props.lives}</Text>
          
        
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
    flex:1,
    position:'absolute',
    top:30,
    left:65,
    right:15,
    flexDirection:'row'
  },
  scoreContainer:{
    flex:1,
    height:40,
    alignItems:'flex-start',
     backgroundColor:'rgb(96,95,97)',
  },
  livesContainer:{
    flex:1,
    height:40,
    alignItems:'flex-start',
    backgroundColor:'rgb(76,75,77)',

  },
  highScoreContainer:{
    flex:1,
    height:40,
   alignItems:'flex-start',

        backgroundColor:'rgb(96,95,97)',
  },
  row:{
    width:120,
    flex:1,
    position:'relative',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
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
    marginLeft:35,
    
    
    fontFamily:'KannadaSangamMN',
    color:'white',
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 0.6,
    fontWeight: "900",
    fontSize:20,
    lineHeight:40,
    textAlign:'left'
        
  },

});




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

export default class Points extends Component {

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
    const style = 
      this.props.value === '10' ? styles.container1:
      this.props.value === '20' ? styles.container2:
      this.props.value === '30' ? styles.container3:
      styles.container4
    return (
      <Animated.View style={{opacity: this.state.fadeAnim, transform: [{translateY: this.state.posAnim}], position:'absolute', top:200, right:this.state.right}}>
        <View style={style}>
          <Text style={styles.letter}>{this.props.value}</Text>
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
  container1: {
    position:'absolute',
    top:100,
    left:100,
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: 'black',
    shadowOpacity: 0.6,
    backgroundColor:'rgb(198,214,82)',
    width:50,
    
    height:50,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center'
  },
  container2: {
    position:'absolute',
    top:100,
    left:100,
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: 'black',
    shadowOpacity: 0.6,
    backgroundColor:'rgb(220,53,89)',
    width:50,
    
    height:50,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center'
  },
  container3: {
    position:'absolute',
    top:100,
    left:100,
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: 'black',
    shadowOpacity: 0.6,
    backgroundColor:'rgb(252,232,78)',
    width:50,
    
    height:50,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center'
  },
  container4: {
    position:'absolute',
    top:100,
    left:100,
    shadowOffset:{  width: 5,  height: 5,  },
    shadowColor: 'black',
    shadowOpacity: 0.6,
    backgroundColor:'rgb(77,179,229)',
    width:50,
    
    height:50,
    borderRadius:25,
    alignItems:'center',
    justifyContent:'center'
  },
});




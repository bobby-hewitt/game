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
  TouchableOpacity,
  Easing,
  Dimensions,
  View
} from 'react-native';
// import LabelContainer from './LabelContainer'

export default class Header extends Component {

  constructor(props){
    super(props)
    this.state = {
      
    }
  }


  onpress(){
    
  }


  render() {
    return (
        <View>
            <Image style={styles.image} source={{url: this.props.image.thumb}} />
            <View style={styles.container}>
              <Text style={[styles.title, styles.text]}>TITLE</Text>
              <Text style={styles.text}>Average score: <Text style={[styles.text, styles.bold]}></Text>{'100' + this.props.score}</Text>      
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
  color:'#fefefe',
  },
  bold:{
    fontWeight:'900'
  },
  title:{
    
    fontWeight:'bold',
    fontSize:30,
  },
  container:{
    alignItems:'center',
    justifyContent: 'center',
    flexDirection:'column',
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0,0.3)',
    
    flex:1
  },
  image: {
    height:Dimensions.get('window').width /2,
    flex:1
  }
 
});




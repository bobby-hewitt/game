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
import Menu from '../../containers/Menu'
export default class Header extends Component {

  constructor(props){
    super(props)
    this.state = {
      
    }
  }


  onpress(){
    this.props.navigator.push({
      component: Menu,
      navigationBarHidden: true,
    })
  }


  render() {
    return (
        <TouchableOpacity style={styles.button} onPress={this.onpress.bind(this)}>
            <Image source={require('../../back.png')} style={styles.image}/>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button:{
    height:40,
    width:40,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'rgb(66,65,67)',
    position:'absolute',
    top:30,
    left:15,
  },

  image: {
    height:40,
    width:40,
    

  }
 
});




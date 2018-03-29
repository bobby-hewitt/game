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

export default class ImageThumb extends Component {

  constructor(props){
    super(props)
    this.state = {
      
    }
  }





  render() {
    return (
        <TouchableOpacity onPress={this.onPress}>
          <Image style={styles.image} source={{url: this.props.image}} />
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    height:Dimensions.get('window').width /3,
    width: Dimensions.get('window').width /3
  }
 
});




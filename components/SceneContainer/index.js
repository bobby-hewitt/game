import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { nextImage, prevImage, nextLabel, prevLabel } from '../../actions/image'
import { increaseScore } from '../../actions/score'
import { updateImages } from '../../actions/http'
import BackButton from '../BackButton'
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  View
} from 'react-native';
import LabelContainer from './LabelContainer'

class SceneContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      theme: 'light'
    }
  }



  render() {
    return (
      <View style={styles.container}>

        <Image source={{uri: this.props.image.image}} style={styles.image}/>
        <BackButton navigator={this.props.navigator}/>
        <LabelContainer />  
      </View>
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
)(SceneContainer)

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




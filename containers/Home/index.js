/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { nextImage, prevImage, nextLabel, prevLabel } from '../../actions/image'
import { increaseScore } from '../../actions/score'
import { updateImages } from '../../actions/http'
import {
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  View
} from 'react-native';
import SceneContainer from '../../components/SceneContainer'



type Props = {};
class Home extends Component<Props> {
   constructor(props){
    super(props)
    this.state = {
      images: [],
      index: 0
    }
  }

  componentWillMount(){
    // this.getSavedData()
  }

  getSavedData(){
    let self = this;
    DB.ref('/images').once('value', function(snapshot){
      var images = []
      var results = snapshot.val()
      const keys = Object.keys(results)
      for (var i = 0; i < keys.length; i++){
        images.push(results[keys[i]])
        self.props.updateImages(images)
      }
    })
  }





  nextPicture(callback){
    if (this.props.imageIndex < this.props.images.length-1){
      const newIndex = this.state.index +1
      this.props.nextImage()
    }
  }

  shouldComponentUpdate(nextProps, nextState){
      // return a boolean value
     
      return true;
  }
  

  render() {
    return (
        <KeyboardAvoidingView
	      style={styles.container}
	      behavior="padding">
        {this.props.image &&
	        <SceneContainer
            navigator={this.props.navigator} 
	          nextPicture={this.nextPicture.bind(this)}
	         />
        }
      	</KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
	image: state.data[state.image.imageIndex],
  score: state.score,
  imageIndex: state.image.imageIndex,
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
)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
 
});





/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { nextImage, prevImage, nextLabel, prevLabel, setImageIndex, setSoloImageIndex, setLabelIndex } from '../../actions/image'
import { increaseScore, setGameType, resetArrays } from '../../actions/score'
import { updateImages } from '../../actions/http'
import ImageThumb from '../../components/ImageThumb'
import MashUp from '../../components/MashUp'
import Header from '../../components/Header'
import Loading from '../../components/Loading'
import Completed from '../../components/Completed'
import Home from '../Home'
import {
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Text,
  ScrollView
} from 'react-native';

import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyArHo7wbhufIL6IKSgIDZthWQUJRw0N398",
  authDomain: "photos-8aa9d.firebaseapp.com",
  databaseURL: "https://photos-8aa9d.firebaseio.com",
  projectId: "photos-8aa9d",
  storageBucket: "",
  messagingSenderId: "940508200624"
};
const Firebase = firebase.initializeApp(firebaseConfig)
const DB = Firebase.database()

type Props = {};
class Menu extends Component<Props> {
   constructor(props){
    super(props)
    this.state = {
      hasCompleted: false,
      isLoading: true,
      isLoadingTransition: false
    }
  }

componentWillMount(){
  var self = this;
  this.props.resetArrays()
  let now = (new Date).getTime()
  let comparator = parseInt(self.props.updateId) + (1000 * 60 * 60 * 12)
  console.log(self.props.updateId)
  console.log(now, comparator, now - comparator, Math.floor(self.props.images.length / 5))
  if (now - comparator > 0 && self.props.imageIndex >= Math.floor(self.props.images.length / 5)){
    self.getSavedData()
  } else if (self.props.imageIndex >= self.props.images.length -1){
    
    self.setState({hasCompleted: true, isLoading: false})
  } else {
    self.setState({hasCompleted: false}, self.loadingTransition.bind(self))
  }
}

  loadingTransition(){
    setTimeout(() => {
      this.setState({isLoadingTransition: true}, () => {
        setTimeout(() => {
          console.log('setting to false')
          this.setState({isLoading: false, isLoadingTransition: false})
        }, 500)
      })
    },300)
  }

  getSavedData(){
    console.log('getting data')
    let self = this;
    DB.ref('/').once('value', function(snapshot){
      var images = []
      var results = snapshot.val()
      var imgRes = results.images
      const id = results.update.id
      const keys = Object.keys(imgRes)
      for (var i = 0; i < keys.length; i++){
        images.push(imgRes[keys[i]])
      }

      self.props.updateImages({images, id})
      self.props.setImageIndex(0)
      self.loadingTransition()
    })
  }

  onMashUp(){
    this.props.setGameType('mashUp')
     this.props.navigator.push({
      component: Home,
      navigationBarHidden: true,
    })
  }

  goToImage(index){
    this.props.setGameType('image')
    this.props.setLabelIndex(0)
    this.props.setSoloImageIndex(index)
    setTimeout(() => {
    this.props.navigator.push({
      component: Home,
      navigationBarHidden: true,
    })
    },100)
    
  }

  renderImageRows(images){
    var imgArr = []
    for (var i =0; i < images.length; i = i+3){
      imgArr.push([
        {
          image: images[i], 
          index: i
        },
        {
          image: images[i+1],
          index: i+1
        },
        {
          image: images[i+2],
          index: i+2
        }
      ])    
    }
    return(
      <View style={styles.container}>

        {!this.state.isLoading && !this.state.hasCompleted &&  
        <MashUp 
          copy1="Lets"
          copy2="go"
          onMashUp={this.onMashUp.bind(this)}
          navigator={this.props.navigator}
          image1={images[images.length-2].thumb}
          image2={images[images.length-3].thumb}
          image3={images[images.length-4].thumb}
          image4={images[images.length-5].thumb}
          image5={images[images.length-6].thumb}
          image6={images[images.length-7].thumb}
          image7={images[images.length-8].thumb}
          image8={images[images.length-9].thumb}
          image9={images[images.length-10].thumb}
        />
        }
        {!this.state.isLoading && this.state.hasCompleted &&
          <Completed 
            updateId={this.props.updateId}/ >
        }
        {this.state.isLoading &&
          <Loading 
          isLoadingTransition={this.state.isLoadingTransition}/>
        }
      </View>
    )

    
  }

  render() {
    return (
       <View style={styles.container}>
       {this.props.images && this.props.images.length > 1 &&
          <View>
          {this.renderImageRows(this.props.images)}
          </View>
        }
       </View>
    );
  }
}

const mapStateToProps = state => ({
  score: state.score.score,
  imageIndex: state.image.imageIndex,
  images: state.data.images,
  updateId: state.data.updateId
})

const mapDispatchToProps = dispatch => bindActionCreators({
	nextImage, 
  resetArrays,
	prevImage,
  setImageIndex, 
  setLabelIndex, 
  setSoloImageIndex,
	nextLabel, 
	prevLabel,
	updateImages,
	increaseScore,
  setGameType
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
   
    backgroundColor: '#F5FCFF',
  },
  row:{
    display:'flex',
    flexDirection:'row'
  }
 
});





/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { nextImage, prevImage, nextLabel, prevLabel, setImageIndex, setLabelIndex } from '../../actions/image'
import { increaseScore, setGameType } from '../../actions/score'
import { updateImages } from '../../actions/http'
import ImageThumb from '../../components/ImageThumb'
import MashUp from '../../components/MashUp'
import Header from '../../components/Header'
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
      
    }
  }

  componentWillMount(){
    if (!this.props.images || this.props.images.length < 1){
      this.getSavedData()
    }
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

  onMashUp(){
    this.props.setGameType('mashUp')
     this.props.navigator.push({
      component: Home,
      navigationBarHidden: true,
    })
  }

  goToImage(index){
    console.log(index)
    this.props.setLabelIndex(0)
    this.props.setImageIndex(index)
    setTimeout(() => {
    this.props.navigator.push({
      component: Home,
      navigationBarHidden: true,
    })
    },100)
    
  }

  renderImageRows(images){
    console.log(images)
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
        }])  
      
    }


    return(
      <ScrollView>
      <Header 
      image={images[images.length-1]}
      score={this.props.score}/>
      <MashUp 
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
        {imgArr.map((row, i) => {
          return(
            <View key={i} style={styles.row}>
              {row.map((card, j) => {
                if (card.image){
                return(
                  <ImageThumb key={i + ' ' + j}image={card.image.thumb} index={card.index} goToImage={this.goToImage.bind(this)}/>
                )
                } else return <View />
              })

              }
            </View>
          )
        })}
      </ScrollView>
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
  images: state.data
})

const mapDispatchToProps = dispatch => bindActionCreators({
	nextImage, 
	prevImage,
  setImageIndex, 
  setLabelIndex, 
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





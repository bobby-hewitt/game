import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { nextImage, prevImage, nextLabel, prevLabel, setLabelIndex } from '../../actions/image'
import { setImageIsLoaded } from '../../actions/ui'
import { increaseScore, addPoints, removePoints, resetPoints, setDifficulty } from '../../actions/score'
import { updateImages } from '../../actions/http'
import { setWord } from '../../actions/letters'

import {
  Platform,
  StyleSheet,
  Text,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  View
} from 'react-native';

class SelectDifficulty extends Component {

  constructor(props){
    super(props)
    this.state = {
      theme: 'light',
    }
  }

  componentWillMount(){


  }

  onpress(index){
    this.props.setDifficulty(index)
    var i = (Math.floor((this.props.image.labels.length-1) / 3) * index)
    // console.log(this.props.image.labels, i, this.props.image.labels.length-1 / 3)*index)
    this.props.setWord(this.props.image.labels[i].description)
    this.props.setLabelIndex(i)
  }

  

 
  render() {
    return (

      
      <View style={styles.container}>
      <TouchableOpacity style={styles.touchable}onPress={this.onpress.bind(this, 1)}>
          <View style={[styles.button]}>
            <Text style={styles.text}>Easy</Text>
            <View style={styles.livesContainer}>
              <Image resizeMode="contain" style={styles.image} source={require('../../assets/images/heart.png')}/>
              <Text style={styles.subText}>x 1</Text>
            </View>
          </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}onPress={this.onpress.bind(this, 2)}>
           <View style={[styles.button]}>
            <Text style={styles.text}>Medium</Text>
            <View style={styles.livesContainer}>
              <Image resizeMode="contain" style={styles.image} source={require('../../assets/images/heart.png')}/>
             <Text style={styles.subText}>x 2</Text>
           </View>
           </View>
           </TouchableOpacity>
           <TouchableOpacity style={styles.touchable}onPress={this.onpress.bind(this, 3)}>
          <View style={[styles.button]}>
           <Text style={styles.text}>Hard</Text>
            <View style={styles.livesContainer}>
              <Image resizeMode="contain" style={styles.image} source={require('../../assets/images/heart.png')}/>
              <Text style={styles.subText}>x 3</Text>
            </View>
          </View>
          </TouchableOpacity>
      </View>
  
    );
  }
}

const mapStateToProps = state => ({

  imageIsLoaded: state.ui.imageIsLoaded,
  highScore: state.score.highScore,
  newLives: state.score.newLives,
  lives: state.score.lives,
  score: state.score.score,
  points: state.score.points,
  image: state.data[state.image.imageIndex],
  imageIndex: state.image.imageIndex,
  labelIndex: state.image.imageIndex,
  images: state.data,
  showImage: state.ui.showImage,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  nextImage, 
  prevImage, 
  nextLabel, 
  setDifficulty,
  prevLabel,
  setLabelIndex,
  updateImages,
  increaseScore,
  addPoints,
  setWord,
  resetPoints,
  removePoints,
  setImageIsLoaded
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectDifficulty)

const styles = StyleSheet.create({
  container:{
   
    flexDirection:'row',
    position:'absolute',
    bottom:0,
    left:0,
    width:Dimensions.get('window').width,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  livesContainer:{
    flex:1,
    marginTop:2,
    flexDirection:'row',
  },
  text:{
    marginTop:4,
    fontSize:16,
    fontWeight:'900',
  },
  subText:{
    fontWeight:'bold',
  },
  image:{
    height:20,
    width:20,
    marginRight:3,
  },
  touchable:{
    flex:1,
  },
  header:{
    marginBottom:15,
    color:'#fefefe',
    fontSize:30,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 0.6,
    fontFamily:'BacktoBlackDemo',
  },

  button:{
    height:50,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: 'black',
    shadowOpacity: 0.6,
    flex:1,
    height:50,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'white',
    flexDirection:'column',
    margin:5,
  }
  
 
});




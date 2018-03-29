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
import Home from '../../containers/Home'
// import LabelContainer from './LabelContainer'

export default class MashUp extends Component {

  constructor(props){
    super(props)
    this.state = {
      
    }
  }


  onpress(){
    this.props.navigator.push({
      component: Home,
      navigationBarHidden: true,
    })
  }


  render() {
    return (
        <TouchableOpacity onPress={this.onpress.bind(this)}>
          <View style={styles.container}>
            <View style={styles.row}>
              {this.props.image1 &&
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={{uri: this.props.image1}} />
                  <View style={styles.imageOverlay} />
                </View>
              }
              {this.props.image2 &&
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={{uri: this.props.image2}} />
                  <View style={styles.imageOverlay} />
                </View>
              }
              {this.props.image3 &&
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={{uri: this.props.image3}} />
                  <View style={styles.imageOverlay} />
                </View>
              }
            </View>
            <View style={styles.row}>
              {this.props.image4 &&
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={{uri: this.props.image4}} />
                  <View style={styles.imageOverlay} />
                </View>
              }
              {this.props.image5 &&
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={{uri: this.props.image5}} />
                  <View style={styles.imageOverlay} />
                </View>
              }
              {this.props.image6 &&
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={{uri: this.props.image6}} />
                  <View style={styles.imageOverlay} />
                </View>
              }
            </View>
            <View style={styles.row}>
              {this.props.image7 &&
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={{uri: this.props.image7}} />
                  <View style={styles.imageOverlay} />
                </View>
              }
              {this.props.image8 &&
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={{uri: this.props.image8}} />
                  <View style={styles.imageOverlay} />
                </View>
              }
              {this.props.image9 &&
                <View style={styles.imageContainer}>
                  <Image style={styles.image} source={{uri: this.props.image9}} />
                  <View style={styles.imageOverlay} />
                </View>
              }
           
            </View>
            <View style={styles.textContainer}>
              <View style={styles.circle}>
              <Text style={styles.buttonText}>Mash</Text>
              <Text style={styles.buttonText}>Up</Text>
              </View>
            </View>
          </View>
         
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text:{
    fontSize:80,
  color:'#fefefe',
  },

  row:{
     width:Dimensions.get('window').width /3-60,
    flexDirection:'row',
  },
  bold:{
    fontWeight:'900'
  },
  title:{
    fontWeight:'bold',
    fontSize:30,
  },
  imageOverlay:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    backgroundColor:'rgba(0,0,0,0.3)'
  },
  textContainer:{
    position:'absolute',
    top:30,
    left:30,
    right:30,
    bottom:30,
     alignItems:'center',
    justifyContent:'center',
     backgroundColor:'rgba(0,0,0,0.4)'
  },
  circle:{
    height:200,
    width:200,
     alignItems:'center',
    justifyContent:'center',
     backgroundColor:'rgba(0,0,0,1)'
  },
  button:{
    alignItems:'center',
    justifyContent:'center',
    width:Dimensions.get('window').width /3-20,
    height:Dimensions.get('window').width /3-20,
  },
  buttonText:{
    fontSize:50,
    fontWeight:"900",
    color:'#fefefe'
  },
  row:{
    flexDirection:'row',
  },
  imageContainer:{
    width:Dimensions.get('window').width /3-20,
    height:Dimensions.get('window').width /3-20,
  },
  image:{
    width:Dimensions.get('window').width /3-20,
    height:Dimensions.get('window').width /3-20,
  },
  container:{
    alignItems:'center',
    justifyContent: 'center',
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').width,
    backgroundColor:'rgba(0,0,0,0.3)',
    
    flex:1
  },
  image: {
    height:Dimensions.get('window').width /2,
    flex:1
  }
 
});




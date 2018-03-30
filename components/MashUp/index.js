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

export default class MashUp extends Component {

  constructor(props){
    super(props)
    this.state = {
      
    }
  }


  onpress(){
    this.props.onMashUp()
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
              <Text style={styles.buttonText}>{this.props.copy1}</Text>
              <Text style={styles.buttonText}>{this.props.copy2}</Text>
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
    
  },
  textContainer:{
    shadowOffset:{  width: 5,  height: 5, blur:200  },
    shadowColor: 'black',
    shadowOpacity: 0.3,
    position:'absolute',
    top:15,
    left:15,
    right:15,
    bottom:15,
    
     alignItems:'center',
    justifyContent:'center',
     backgroundColor:'rgba(16,16,16,0)'
  },
  circle:{
    shadowOffset:{  width: 5,  height: 5, blur:200  },
    shadowColor: 'black',
    shadowOpacity: 0.6,
    borderStyle:'solid',
    borderWidth:10,
    borderColor:'#fefefe',
    borderRadius:0,
    height:170,
    width:170,
     alignItems:'center',
    justifyContent:'center',
     backgroundColor:'rgba(16,16,16,0.5)'
  },
  button:{
    alignItems:'center',
    justifyContent:'center',
    width:Dimensions.get('window').width /3-10,
    height:Dimensions.get('window').width /3-10,
  },
  buttonText:{
    margin:-5,
    fontFamily:'BacktoBlackDemo',
    fontSize:50,
    lineHeight:60,
    fontWeight:"900",
    color:'#fefefe',
    paddingHorizontal:5,
  },
  row:{
    flexDirection:'row',
  },
  imageContainer:{
    width:Dimensions.get('window').width /3-10,
    height:Dimensions.get('window').width /3-10,
  },
  image:{
    width:Dimensions.get('window').width /3-10,
    height:Dimensions.get('window').width /3-10,
  },
  container:{
    alignItems:'center',
    justifyContent: 'center',
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').width,
    // backgroundColor:'rgba(255,255,255,0.6)',
    
    flex:1
  },
  image: {
    height:Dimensions.get('window').width /2,
    flex:1
  }
 
});




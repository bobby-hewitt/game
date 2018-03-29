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
            <View style={styles.container}>
              <Text style={[styles.title]}>What would Google do?</Text>
              <Text style={styles.text}>Average score: <Text style={[styles.text]}></Text>{'100'}</Text>      
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  text:{
  color:'black',
  fontFamily:'KannadaSangamMN',
  color:'rgb(65,64,66)'
  },
  bold:{
    fontWeight:'900'
  },
  title:{
    fontFamily:'BacktoBlackDemo',
    fontWeight:'bold',
    fontSize:30,
    lineHeight:40,
  },
  container:{
    alignItems:'center',
    justifyContent: 'center',
    flexDirection:'column',
    paddingTop:30,
    paddingBottom:20,
    backgroundColor:'rgba(252,232,78,1)',
    flex:1
  },
  image: {
    height:Dimensions.get('window').width /2,
    flex:1
  }
 
});




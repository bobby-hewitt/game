import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { nextImage, prevImage, nextLabel, prevLabel, setLabelIndex, setImageIndex } from '../../../actions/image'
import { increaseScore, isIncorrect } from '../../../actions/score'
import { updateImages } from '../../../actions/http'
import { setLetters, setWord, setLastLetter } from '../../../actions/letters'
import { setShowLetters } from '../../../actions/ui'
// import key from 'keymaster';
import AnimateInOutView from '../../AnimateInOutView'
import Letter from '../../Letter'

import {
  Platform,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  View,
  Dimensions,
  TextInput
} from 'react-native';

class LabelContainer extends Component {

  constructor(props){
    super(props)
    
    this.page = 'letters'
  }

  componentWillMount(){
    this.createWord(this.props)
  }

  componentWillReceiveProps(np){
    if (np.label.description !== this.props.word){
      this.createWord(np)
    }
  }

  createWord(np){
    var letters = []
    for (var i = 0; i < this.props.label.description.length; i++){ 
      letters.push({
        letter: np.label.description[i],
        found: false
      })
    }
    this.props.setLetters(letters)
    this.props.setWord(np.label.description)
  }

  onKeyPress(text){
    if (this.props.showLetters){
    var key = text[text.length-1]
    this.props.setLastLetter(key.toLowerCase())

    var letters = Object.assign([], this.props.letters)
    var hasFound = false
    var count = 0
    for (var i = 0; i < this.props.letters.length; i++){
      if (key.toLowerCase() === this.props.letters[i].letter){
        hasFound = true
        this.props.letters[i].found = true
      }
      if (this.props.letters[i].found || this.props.letters[i].letter === ' '){
        count += 1
      }
    }
    this.props.setLetters(letters)
    
    if (!hasFound){
      this.props.isIncorrect()
    } else if (count === this.props.letters.length ){
      setTimeout(() => {
        this.nextLabel()
      },500)
    }
    } 
  }

  nextLabel(){
    console.log('next')

    console.log(this.props.labelIndex)
    if (this.props.labelIndex === this.props.image.labels.length -1 || this.props.labelIndex === 2){
         this.props.nextImage()
      return
    } else {
        this.transition()
    }
  }

  transition(){
    this.props.setShowLetters(false)
    setTimeout(() => {
      this.props.nextLabel()
    },200)
    setTimeout(() => {
      this.props.setShowLetters(true)
    },200)
  }

  renderRows(letters){

    // var letters = ['h','i', ' ', 't', 'h', 'e', 'r', 'e']
    let rows = [[]]
    for (var i = 0; i < letters.length; i++){
      if (letters[i].letter === ' '){
        rows.push([])
      } else {
        rows[rows.length-1].push(letters[i])
      }
    }
    
    var r = (
      <View style={styles.lettersContainer}>
      {rows.map((r,i) => {
        return(
          <View key={i} style={styles.row}>
            {r.map((letter, j) => {
              if (letter.found){
                var lastLetter = letter.letter === this.props.lastLetter
                console.log('IS LAST LETTER', lastLetter)
                return(
                  <Letter  
                    lastLetter={lastLetter}
                    key={i + '' + j}
                    text={letter.letter}/>
                 
                )
              } else {
                return(
                 <Letter  
                    key={i + '' + j}
                    text=""/>
                )
              }
            })}
          </View>
        )
      })}
      </View>
    )  
    return r
  }

  focus(){
      this.textInput.focus()
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.focus.bind(this)}>
        <View style={styles.container}  >
          <View style={styles.input}>
            <TextInput
              autoCorrect={false}
              ref={input => { this.textInput = input }}
              autoFocus={true}
              style={{
                position:'absolute',
                top:0,
                left:0,
                zIndex:101,
                height:Dimensions.get('window').height,
                width:Dimensions.get('window').width,
              }}
              
              onChangeText={(text) => this.onKeyPress(text)}/>
          </View>
            
              <AnimateInOutView 
                isVisible={this.props.showLetters}
                incorrectToggle={this.props.incorrectToggle}>
              {this.renderRows(this.props.letters)}
              </AnimateInOutView>
            
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const mapStateToProps = state => ({
  score: state.score.score,
  incorrectToggle: state.score.incorrectToggle,
  letters: state.letters.letters,
  lastLetter: state.letters.lastLetter,
  word: state.letters.word,
  image: state.data[state.image.imageIndex],
  label: state.data[state.image.imageIndex].labels[state.image.labelIndex],
  imageIndex: state.image.imageIndex,
  labelIndex: state.image.labelIndex,
  images: state.data,
  showLetters: state.ui.showLetters,

})

const mapDispatchToProps = dispatch => bindActionCreators({
  nextImage, 
  setLastLetter,
  setShowLetters,
  prevImage, 
  nextLabel, 
  setLabelIndex,
  setImageIndex,
  prevLabel,
  updateImages,
  increaseScore,
  setLetters,
  setWord,
  isIncorrect
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LabelContainer)

const styles = StyleSheet.create({
  input:{
    opacity:0,
    zIndex:100,
    position:'absolute',
    top:0,
    left:0,
    height:Dimensions.get('window').height,
    width:Dimensions.get('window').width,
  },
  container: {
    position:'absolute',
    bottom:15,
    left:0,
    width:Dimensions.get('window').width,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',

    // backgroundColor: '#F5FCFF',
  },
  row:{
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  lettersContainer:{
    flex:1,
    alignItems: 'center',
    flexDirection:'column'
  },
  
 
});



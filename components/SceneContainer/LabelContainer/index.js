import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react';
import { nextImage, prevImage, nextLabel, prevLabel, setLabelIndex, setImageIndex } from '../../../actions/image'
import { increaseScore, isIncorrect, addPoints, removePoints, setStreak, loseLife, resetLives, addLife, resetNewLives,setDifficulty } from '../../../actions/score'
import { updateImages } from '../../../actions/http'
import { setLetters, setWord, setLastLetter } from '../../../actions/letters'
import { setShowLetters, setShowImage } from '../../../actions/ui'
// import key from 'keymaster';
import GameOver from '../../GameOver'
import AnimateInOutView from '../../AnimateInOutView'
import Letter from '../../Letter'
import Menu from '../../../containers/Menu'

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
    // this.createWord(this.props)
  }

  componentWillReceiveProps(np){
    if (!this.props.label){
      if (np.label){
        this.createWord(np)
      } else {
        return
      }
    }else if (np.label && np.label.description !== this.props.word){
      console.log('next props')
      this.createWord(np)
    } 
  }

  componentDidMount(){
    this.focus()

    if (this.props.label){
      console.log('working here')
      this.createWord(this.props)
    }
  }

  createWord(np){
    console.log('CREATING WORD')
    var letters = []
    for (var i = 0; i < np.label.description.length; i++){ 
      letters.push({
        letter: np.label.description[i],
        found: false
      })
    }

    this.props.setLetters(letters)
    this.props.setWord(np.label.description)
  }

  gameOver(){
    this.props.navigator.push({
      component: GameOver,
      navigationBarHidden: true,
    })
  }

  onKeyPress(text){

    
    if (this.props.showLetters && this.props.showImage){
      var key = text[text.length-1]
      if (key){
      this.props.setLastLetter(key.toLowerCase())

      var letters = Object.assign([], this.props.letters)
      var hasFound = false
      var count = 0
      for (var i = 0; i < this.props.letters.length; i++){
        if (key.toLowerCase() === this.props.letters[i].letter){
          hasFound = true
          if (!this.props.letters[i].found){
            var streak = this.props.streak ? this.props.streak + 10 : 10
            this.props.increaseScore(streak)
            this.props.addPoints(streak.toString())
            this.props.setStreak(this.props.streak ? this.props.streak + 10 : 10)
          }
          this.props.letters[i].found = true
        }
        if (this.props.letters[i].found || this.props.letters[i].letter === ' '){
          count += 1
        }
      }
      this.props.setLetters(letters)
      
      if (!hasFound){
        if (this.props.lives === 1){
            this.gameOver()
          //game over
        }
        this.props.loseLife()
        this.props.setStreak(false)
        this.props.isIncorrect()
      } else if (count === this.props.letters.length ){
        setTimeout(() => {
          this.nextLabel()
        },500)
      }
    } 
  }
  }

  nextLabel(){
    if (this.props.gameType === 'mashUp'){
        this.props.setDifficulty(false)
        if (this.props.imageIndex < this.props.images.length -1){
         this.transitionImage()
        } else {
          this.props.navigator.push({
            component: Menu,
            navigationBarHidden: true,
          })
          return
        }
      return
    } else if (this.props.labelIndex === this.props.image.labels.length -1){
      
    } else {
      this.transition()
        // handle image complete
    }
  }

  addLife(){
    if (this.props.lives < 20){
      this.props.addLife()
    }
  }

  transitionImage(reset){
    this.props.setShowImage(false)
    setTimeout(() => {
      var i =0;
      var interval = setInterval(() => {
        if (i < this.props.difficulty){
          i++
          this.addLife()
        } else {
          clearInterval(interval)
        }
      },150)
      if (reset){
        this.props.setImageIndex(0)
      } else {
        this.props.nextImage()
      }
    },200)
    setTimeout(() => {
      this.props.setShowImage(true)
    },200)

  }

  transition(){
    this.props.setShowLetters(false)
    setTimeout(() => {
      var i = 0;
      var interval = setInterval(() => {
        if (i < this.props.difficulty){
          i++
          this.addLife()
        } else {
          clearInterval(interval)
        }
      },150)
      
      this.props.nextLabel()
    },200)
    setTimeout(() => {
      this.props.setShowLetters(true)
    },200)


 
  }

  renderRows(letters){
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
      { rows.map((r,i) => {
        return(
          <View key={i} style={styles.row}>
            {r.map((letter, j) => {
              if (letter.found){
                var lastLetter = letter.letter === this.props.lastLetter
                
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
            {this.props.label &&
              <AnimateInOutView 
                isVisible={this.props.showLetters}
                incorrectToggle={this.props.incorrectToggle}>
                {this.renderRows(this.props.letters)}
              </AnimateInOutView>
            }
            
        </View>
        
      </TouchableWithoutFeedback>
    );

  }
}

const mapStateToProps = state => ({
  difficulty: state.score.difficulty,
  lives: state.score.lives,
  streak: state.score.streak,
  score: state.score.score,
  incorrectToggle: state.score.incorrectToggle,
  letters: state.letters.letters,
  lastLetter: state.letters.lastLetter,
  word: state.letters.word,
  image: state.data.images[state.image.imageIndex],
  label: state.data.images[state.image.imageIndex].labels[state.image.labelIndex],
  imageIndex: state.image.imageIndex,
  soloImageIndex: state.image.soloImageIndex,
  labelIndex: state.image.labelIndex,
  images: state.data.images,
  showLetters: state.ui.showLetters,
  showImage: state.ui.showImage,
  gameType: state.score.gameType
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
  isIncorrect,
  addPoints,
  removePoints,
  setStreak,
  loseLife,
  resetLives,
  setShowImage,
  resetNewLives,
  addLife,
  setDifficulty
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
    paddingVertical:5,
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



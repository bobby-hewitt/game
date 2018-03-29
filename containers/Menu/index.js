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
import ImageThumb from '../../components/ImageThumb'
import MashUp from '../../components/MashUp'
import Header from '../../components/Header'
import {
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Text,
  ScrollView
} from 'react-native';

type Props = {};
class Menu extends Component<Props> {
   constructor(props){
    super(props)
    this.state = {
      
    }
  }

  renderImageRows(images){
    var imgArr = []

    for (var i =0; i < images.length; i = i+3){
      imgArr.push([images[i], images[i+1],images[i+2]])
    }


    return(
      <ScrollView>
      <Header 
      image={images[images.length-1]}
      score={this.props.score}/>
      <MashUp 
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
                if (card){
                return(
                  <ImageThumb key={i + ' ' + j}image={card.thumb} />
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
       {this.renderImageRows(this.props.images)}
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
	nextLabel, 
	prevLabel,
	updateImages,
	increaseScore,
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





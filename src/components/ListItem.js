import React, { Component } from 'react'
import { CardSection } from './common'
import { connect } from 'react-redux'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import * as actions from '../actions'

class ListItem extends Component {

  renderDescription() {
    if (this.props.library.item.id === this.props.selectedLibraryId) {
      return(
        <Text>{this.props.library.item.description}</Text>
      )
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(this.props.library.item.id)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{this.props.library.item.title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles ={
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId }
}

export default connect(mapStateToProps, actions)(ListItem);
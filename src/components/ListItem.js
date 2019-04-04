import React, { Component } from 'react'
import { CardSection } from './common'
import { connect } from 'react-redux'
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native'
import * as actions from '../actions'

class ListItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    if (this.props.expanded) {
      return(
        <CardSection>
          <Text style={{ flex: 1 }}>{this.props.library.item.description}</Text>
        </CardSection>
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

const mapStateToProps = (state, ownProps) => {

  const expanded = state.selectedLibraryId === ownProps.library.item.id;

  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem);
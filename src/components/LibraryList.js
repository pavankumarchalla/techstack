import React from 'react'
import { connect } from 'react-redux'
import { stat } from 'fs';

class LibraryList extends Component {
  render() {
    return;
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList)
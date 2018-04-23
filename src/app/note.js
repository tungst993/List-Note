import React from 'react';
import {connect} from 'react-redux';
import * as action from '../redux/action'

class Note extends React.Component {
    constructor(props) {
        super(props);
        this.removeNote = this.removeNote.bind(this)

    }
    removeNote() {
        var {index} = this.props
        this.props.remove(index)
      
    }
    render() {
        return (
            <div className = "div-list">
                <p>
                   {this.props.children}
               </p>
                <button onClick = {this.removeNote}> Delete </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        mang: state.mangReducer
     }
} 

const mapDispatchToProps = (dispatch, props) => {
  return {
     remove : (index) => {
         dispatch(action.removeItem(index))
     }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Note);

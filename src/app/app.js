import React from 'react';
import Input from './input';
import Note from './note'
import { connect } from 'react-redux';
import * as action from '../redux/action'

class App extends React.Component {
    constructor(props) {
        super(props);  
      
    }
    
    render() {  
        return (
            <div className = "div-note">
            <Input />
            {this.props.mang.map((e,i) => <Note  index ={i} key = {i}>{e}</Note>)}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return { 
        mang: state.mangReducer
     }
} 



export default connect(mapStateToProps)(App)
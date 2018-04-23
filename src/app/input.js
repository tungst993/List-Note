import React from 'react';
import {connect} from 'react-redux';
import * as action from '../redux/action'

class Input extends React.Component {
    constructor(props) {
        super(props);
       
      
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
        
    } 

    handleSubmit(e){
        e.preventDefault();
        const item = this.refs.txt.value
        this.props.add(item)
        this.props.toggle()
        
    }
    toggle() {
        this.props.toggle()
    }

    render() {
        if(this.props.isAdding){
            return (
                <div>
                 <form onSubmit={this.handleSubmit}>
                 <input type="text" placeholder="Enter your text" ref="txt"/>
                 <br/><br/>
                 <button>Add</button>
                 </form>
                </div>
                
             )
        }
        else {
            return <button onClick = {this.toggle}> Add notes</button>
            
        }
       
    }
}

const mapStateToProps = (state) => {
    return {
        isAdding: state.isAddingReducer

    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        add : (item) => {
            dispatch(action.addItem(item));
        },
        toggle: () => {
            dispatch(action.toggle())
        }
    
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Input)
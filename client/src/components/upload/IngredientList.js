import React, { Component } from 'react'
// import useFormInput from '../hooks/useFormInput'
import { connect } from 'react-redux'
import IngredientItem from './IngredientItem.js';

class IngredientList extends Component {

  render() {
    return (
      <div className="item">
       <ul className='ingredientUL'> 
        {this.props.inputs.map(item => (
          <IngredientItem {...item} />
         ))}
       </ul>
      </div>
    )
  }
}

function mapStateToProps(appState) {
    return {
        inputs: appState.inputs
    }
}

export default connect(mapStateToProps)(IngredientList)

import React , {useSate} from 'react';
import {connect} from 'react-redux';
import './App.css';

function CounterDisplay(props) {
  return (
    <h1 className="bigTitle">Compteur : {props.count }</h1>
  )

}

function mapStateToProps(state) {
    return { count: state.count }
  }
  
  export default connect(
      mapStateToProps, 
      null
  )(CounterDisplay);
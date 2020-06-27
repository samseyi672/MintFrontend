import React, { Component } from 'react'
import { connect } from 'react-redux'

 const  FormDisplay = props => {
  console.log("inside  form  ", props.netdata) ;
    return (
        <React.Fragment>
        {props.netdata}  
        </React.Fragment>
    ) ;
}
export default FormDisplay  ;
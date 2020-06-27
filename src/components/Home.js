import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import  CardForm  from './CardForm'
export class Home extends Component {
    render() {
        return (
            <React.Fragment>
               <Header/>  
               <CardForm />           
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

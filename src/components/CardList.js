import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import CardButton from './CardButton'

export class CardList extends Component {
    render() {
        return (
            <div>
            <Header /> 
            <CardButton/>  
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}


export default connect(mapStateToProps, mapDispatchToProps)(CardList) 
































































































































































import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'

export class CardList extends Component {
    render() {
        return (
            <div>
            <Header />   
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)

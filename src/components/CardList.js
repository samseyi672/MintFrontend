import React, { Component } from 'react' ;
import { connect } from 'react-redux' ;
import Header from './Header' ;
import CardButton from './CardButton' ;
import {fetchCardList} from '../action/index' ;
import * as QueryString from  'query-string' ;
import JSONPretty from 'react-json-pretty' ;
import JSONPrettyMon from  'react-json-pretty/dist/monikai';

export class CardList extends Component {

    constructor(props){
    super(props) ;
     this.state  ={
         start:'',
         limit:''
     }
    }

  componentDidMount(){
   let query  =  QueryString.parse(this.props.location.search) ;
   console.log(query.start) ;
   console.log(query.limit) ;
    console.log(this.state.start) ;
   console.log(this.state.limit) ;
   // let url  =   `start='${this.state.start}'&limit='${this.state.limit}'`;
    this.props.fetchCardList(query.start,query.limit) ;   
   }
   componentDidUpdate(){
    let query  =  QueryString.parse(this.props.location.search) ;
    console.log(query.start) ;
    console.log(query.limit) ;
     console.log(this.state.start) ;
    console.log(this.state.limit) ;
    // let url  =   `start='${this.state.start}'&limit='${this.state.limit}'`;
     this.props.fetchCardList(query.start,query.limit) ; 
   }
    render() {
        return (
            <div>
            <Header /> 
            {/* <CardButton/>  */}
            <div className="col-md-5"></div>
              <div className=""> <JSONPretty data={this.props.fetchcard} theme={JSONPrettyMon}></JSONPretty> </div>                                    */}
                      <div className="col-md-4"></div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
  return {
    fetchcard:state.fetchcard, 
   }
} ;

export default connect(mapStateToProps, {fetchCardList:fetchCardList})(CardList) 
































































































































































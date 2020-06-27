import React, { Component } from 'react';
import {validateCard} from '../action/index' ;
import {connect} from 'react-redux';
import FormDisplay from './FormDisplay';
import JSONPretty from 'react-json-pretty' ;
import JSONPrettyMon from  'react-json-pretty/dist/monikai';

export class CardForm extends Component {
  constructor(props){
   super(props) ;
   this.onchange  =  this.onchange.bind(this) ;
   this.onsubmit =  this.onsubmit.bind(this) ;
   this.state =  {
     id:"",
        } ;
  }    
   
   onchange(event){
     console.log(event.target.value) ;
    this.setState({id:event.target.value}) //note this approach 
           }
   onsubmit(e){
    e.preventDefault() ;
  this.props.validateCard(this.state.id);  
       }
   formdispay(){
    console.log('inside submit ',this.props.card) ;   
    console.log(this.props.card.success) ;
     }
    render() {
        return (
            <React.Fragment>
              <div className="project">         
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Mint Card Validation</h5>
                            <hr />
                            <form onSubmit={this.onsubmit}>
                                <div className="form-group" >
                                    <input type="text" className="form-control form-control-lg " 
                                    placeholder="Enter Card Number" 
                                    name="cardnumber"
                                    value={this.state.cardnumber}
                                    onChange={this.onchange}
                                    />
                                    <small><code>Here you  call url localhost:8092/cardscheme/verify/cardnumber</code></small>
                                    <p>{}</p>
                                </div>
        
                                <input type="submit" className="btn btn-primary btn-block mt-4" value="Validate" />
                            </form>
                        </div>
                    </div>
                     <div className="row"><br/><br/><br/>
                     <br/><br/><br/>
                     <div className="col-md-5"></div>
              <div className=""> <JSONPretty data={this.props.card} theme={JSONPrettyMon}></JSONPretty> </div>                                    */}
                      <div className="col-md-4"></div>
                    </div>
                </div>
            </div>
               )  
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state,props) => {
   return  {
    card:state.cardnumber,
     }
};

export default connect(mapStateToProps,{validateCard:validateCard})(CardForm)














































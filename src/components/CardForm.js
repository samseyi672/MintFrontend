import React, { Component } from 'react'
import { connect } from 'react-redux'

export class CardForm extends Component {
  constructor(props){
   super(props) ;
   this.onchange  =  this.onchange.bind(this) ;
  // this.onSubmit =  this.onSubmit.bind(this) ;
  }
   state =  {
     cardnumber :"",
   } ;
   onchange(event){
    this.setState({[event.target.name]:event.target.value}) //note this approach 
   }
   onSubmit(e){
    e.preventdefault() ;
  const newproject  = {
    cardnumber:this.state.cardnumber, 
        };
  console.log(newproject) ;
  //calling the action creator 
  //this.props.createProject(newproject,this.props.history) ;
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
                            <form>
                                <div className="form-group" onSubmit={this.onSubmit}>
                                    <input type="text" className="form-control form-control-lg " 
                                    placeholder="Enter Card Number" 
                                    name="cardnumber"
                                    value={this.state.cardnumber}
                                    onChange={this.onchange}
                                    />
                                    <small><code>Here you  call url localhost:8092/cardscheme/verify/cardnumber</code></small>
                                    <p>{}</p>
                                </div>
        
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
               )  
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(CardForm)

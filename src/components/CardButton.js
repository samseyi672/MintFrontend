import React from 'react';

function CardButton(props) {
    return (
        <div className="container-fluid margin-right">
        <div className="row">
            <div className="col-md-6 offset-3">
            <form>
         <input type="submit" className="btn btn-primary btn-block mt-4" />
            </form> 
            </div>
        </div>
        </div>
    );
}


export default CardButton;

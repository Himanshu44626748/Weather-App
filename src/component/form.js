import React from 'react';
import './form.css';

function Forms (props){
    
    return (
        <div className="container">
            <form onSubmit={props.loader} className="text-light">
                <div className="form-row py-3">
                    <div className="col-md-5 py-2">
                        <input className="text-light form-control border border-top-0 border-right-0 border-left-0" type="text" name="city" placeholder="City"></input>
                    </div>
                    <div className="col-md-5 py-2">
                        <input className="text-light form-control border border-top-0 border-right-0 border-left-0" type="text" name="country" placeholder="Country"></input>
                    </div>
                    <div className="col-md-2 py-2">
                        <button type="submit" className="btn btn-warning">Get Weather</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Forms;
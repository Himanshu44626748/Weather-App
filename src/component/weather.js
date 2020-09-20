import React from 'react';

function Weather(props){

    if(props.error == true)
    {
        return (<div></div>);
    }
    else{
        return (
            <div className="container text-light">
                <div className="cards">
                    <h1>{props.city}, {props.country}</h1>
                    <h5 className="py-4">
                        <i className={`wi ${props.weatherIcon} display-1`}></i>
                    </h5>
                    <h4 className="font-weight-bold py-2">{props.temp}&deg;</h4>
                    <h5 className="font-weight-bold">
                        {temp(props.max_temp, props.min_temp)}
                    </h5>
                        <h4 className="font-weight-bold py-2">{props.description}</h4>
                </div>
            </div>
        );
    }
}

function temp(min, max)
{
    return (
        <div>{max}&deg; {min}&deg;</div>
    );
}
export default Weather;
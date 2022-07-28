import React from "react";

/**
 * Renders information about the user obtained from MS Graph
 * @param props 
 */
export const WeatherData = (props) => {
    return (
        <div>
            {props.weatherData.map((forecast, index) => {
                return (<div key={index} id="profile-div">
                    <p><strong>Date: </strong> {forecast.date}</p>
                    <p><strong>Temperature C: </strong> {forecast.temperatureC}</p>
                    <p><strong>Temperature F: </strong> {forecast.temperatureF}</p>
                    <p><strong>Summary: </strong> {forecast.summary}</p>
                </div>)
            })}
        </div>
    );
};
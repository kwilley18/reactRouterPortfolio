import React from "react"; 
import { Link, Route } from "react-router-dom";
import { Component} from "react";
//import Project1 from "../images/IMG_5379.PNG"; 
import { data } from './data.json'; 


function Project(){
 const istrue = true; 
        return(
                <div className="container p-5 rounded my-5 responsive col-sm-8">
                    <div class="row rounded-3">
                            { data.map((info, key) => {      
                                if( info.deployedLink !== ''){
                                    return ( 
                                                <div key={key}>
                                                    <h1 className="display-4">{info.name}</h1>
                                                    <img src={info.photo} class="responsive mx-auto d-block rounded-3" style={{ alignSelf: 'center' }}></img> 
                                                        <div className="container my-3">
                                                            <div className="col-md-12 text-center">
                                        
                                                                <button type="button" class="btn btn-light m-3"><a href={info.githubLink}>Github </a></button> 
                                                                <button type="button" class="btn btn-light m-3"><a href={info.deployedLink}>Website</a> </button>
                                                            </div>
                                                        </div>
                                                </div>
                                            );
            
                            }   
                                else {
                                    return ( 
                                                <div key={key}>
                                                    <h1 className="display-4">{info.name}</h1>
                                                    <img src={info.photo} class="responsive mx-auto d-block rounded-3" style={{ alignSelf: 'center' }}></img> 
                                                        <div className="container my-3">
                                                            <div className="col-md-12 text-center">
                                        
                                                                <button type="button" class="btn btn-light m-3"><a href={info.githubLink}>Github </a></button> 
                                                            </div>
                                                        </div>
                                                </div>
                                         );    
                                }    
                
                       
                            })}
                           
                            

                    </div>

                </div>
        ); 
}


/*const ProjectData = (props) => {
    //const {data} = props; 
    return(
        <div>
            <p>Name: {props.data.name}</p>
            <p>Github: <a href = {props.data.githubLink}>Github Code</a></p>
           <p> Deployed Link: <a href={props.data.deployedLink}>Website</a></p>
           <p> Photo: <a href={props.data.photo}>P</a></p>
        </div>
    ); 

    
}
*/


export default Project; 
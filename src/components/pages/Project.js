import React from "react"; 
import { Link, Route } from "react-router-dom";
import { Component} from "react";
//import Project1 from "../images/IMG_5379.PNG"; 
import { data } from './data.json'; 


function Project(){

        return(
                <div class=" container p-5 rounded my-5">
                    <div class="row rounded-3">
                            {data.map((info, key) => {
                                       var img = new Image();
                                       img.src = info.photo;
                                       console.log(info.photo)
                                       img.setAttribute("class", "p");
              
                                return (

                                    <div class="col-6 mx-auto align-items m-3">
                                        <div key={key}>
                                            <h1 class="display-4">{info.name}</h1>
                                            <img src={info.photo} class="responsive mx-auto d-block rounded-3"  width="auto" height="300"></img> 
                                                <div class="container my-3">
                                                    <div class="col-md-12 text-center">
                                                        <button type="button" class="btn btn-light m-3"><a href={info.githubLink}>Github </a></button> 
                                                        <button type="button" class="btn btn-light m-3"><a href={info.deployedLink}>Website</a> </button>
                                                    </div>
                                                </div>
                                        </div>
                                    </div>
                                );
                       
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
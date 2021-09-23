import React from "react"; 
import { Link, Route } from "react-router-dom";
import { Component} from "react";
import Project1 from "../images/IMG_5379.PNG"; 
import { data } from './data.json'; 


function Project(){

  
        //this.state ={
           // data,
                /*githublink: jsonData.githublink, 
                deployedLink: jsonData.deployedLink,
                photo: jsonData.photo*/ 
            

            
            //console.log("JSON" , jsonData[0].deployedLink); 

                /*data: {
                    githubLink: "KRKRKR", 
                    deployedLink:"GGGGG",
                    photo:"KKK",
                },
                data2:{
                    githubLink: "eeeR", 
                    deployedLink:"aaaa",
                    photo:"bbb",  
                },*/ 
                //console.log(data); 

    



       
  


    //render(){
        return(
            <div>
                <h1 class="display-1">Projects</h1>
                <div class="container">
                    <div class="row">
                            {data.map((info, key) => {
                                return (
                                    <div class="col-6">
                                        <div key={key}>
                                            <p><a href="{info.githubLink }" >Github: </a></p> 
                                            <i class="fab fa-github"></i>
                                            <p>Deployed Link: {info.deployedLink} </p>
                                            <p>Photo: {info.photo}</p>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>

                </div>
            </div>
        ); 
}


const ProjectData = (props) => {
    const {data} = props; 
    return(
        <div>
            <p>Name: {props.data.name}</p>
            <p>Github: <a href = {props.data.githubLink}>Github Code</a></p>
           <p> Deployed Link: <a href={props.data.deployedLink}>Website</a></p>
           <p> Photo: <a href={props.data.photo}>P</a></p>
        </div>
    ); 

    
}

export default Project; 
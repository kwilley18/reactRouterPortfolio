import React from "react"; 
import { Link, Route } from "react-router-dom";
import Project from "./Project"; 

function ProjectGallery (props){
    return(
        <div>
        <h1 class="display-1">Project Gallery</h1>
        <Project /> 
        </div>

    ); 
}

export default ProjectGallery; 
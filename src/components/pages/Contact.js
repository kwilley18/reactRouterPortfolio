import React from "react"; 
import { Link, Route } from "react-router-dom";
import ProjectGallery from "./ProjectGallery";

function Contact (props){
    return(
        <div>
            <h1 class="display-1">Contact</h1>
                <form>

                    <div class="form-group">
                        <input type="email" class="form-control" id="email" placeholder="email address">

                        </input>
                    </div>
                    <div class="form-group">
                        <textarea class="form-control" id="form" rows="3" placeholder="send me a message!"></textarea>
                        <button class="btn btn-primary" type="submit">Send</button>
                    </div>
                    

                    
                
                </form>
     </div>
    ); 
}

export default Contact; 
import React from "react"; 
import { Link, Route } from "react-router-dom";
import ProjectGallery from "./ProjectGallery";
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import { fa-github} from '@fortawesome/free-solid-svg-icons'



function Contact (props){

   //const element = <FontAwesomeIcon icon = {fa-github} /> 
    return(
        <div>
            <h1 class="display-1">Contact</h1>
                
            <div class="container align-items text-center">
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
                <h1 class="display-4"><a href="https://www.linkedin.com/in/kristian-willey-621430153/">LinkedIn</a></h1>
                <h1 class="display-4"><a href="https://github.com/kwilley18">     <FontAwesomeIcon icon="fa-brands fa-github" />GitHub</a></h1>
           

                <h1 class="display-4">Email Address: kristianwilley@gmail.com</h1>
                <h1 class="display-4"><a href="../res.pdf" download>Resume
  
</a></h1>
                

            </div>
          


     </div>
    ); 
}

export default Contact; 
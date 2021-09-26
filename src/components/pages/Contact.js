import React, { useRef } from "react"; 
import { Link, Route } from "react-router-dom";
import ProjectGallery from "./ProjectGallery";
import { library } from '@fortawesome/fontawesome-svg-core'
import emailjs from 'emailjs-com'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//import { fa-github} from '@fortawesome/free-solid-svg-icons'



function Contact (){

    const form = useRef(); 
    const sendEmail = (email) => {
        email.preventDefault();

        emailjs.sendForm('gmail', 'template_c1ryt3k',email.target,'user_3nnuQyoLxoubE33cdbx30')
        .then( (result) => {
            console.log(result.text); 
        }, (error) => {
            console.log(error.text); 
        }); 
       email.target.reset(); 
    }; 
   //const element = <FontAwesomeIcon icon = {fa-github} /> 
    return(
        <div>
            <h1 class="display-1">Contact</h1>
                
            <div class="container">
                
     
                <div>
                    <div class="col-12 text-center">
                        <button class="display-4 btn btn-light m-3"><a href="https://www.linkedin.com/in/kristian-willey-621430153/">LinkedIn</a></button>
                        <button class="display-4 btn btn-light m-3"><a href="https://github.com/kwilley18"><FontAwesomeIcon icon="fa-brands fa-github" />GitHub</a></button>
                        <Link to="./newResume.pdf" target="_blank" download> <button class="display-4 btn btn-light m-3">Resume</button></Link>
                        </div>

                </div>

                <form ref={form} onSubmit={sendEmail}> 

                    <div class="form-group">
                        <input type="email" class="form-control m-3 " name="email" placeholder="email address">

                        </input>
                    </div>
                    <div class="form-group text-center">
                        <textarea class="form-control m-3 p-4" name="message" rows="3" placeholder="send me a message!"></textarea>
                        <button class="btn btn-light m-3"type="submit" value="Send">Send</button>
                    </div>

                </form> 

                
            
            </div>
          


     </div>
    ); 

}

export default Contact; 
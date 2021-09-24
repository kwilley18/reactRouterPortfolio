import React from "react"; 
import grad from '../images/grad.jpeg';
function Home(){
    return(
        <div class="container text-center">
            <img src={grad} height="500" width="500"/>
                <h1 class="display-1">Kristian Willey</h1>
                <h1 class="display-4">I am a front-end web developer and graphic designer.</h1>
                <button type="button" class="btn"><a href="https://kwilley18.github.io/Bootstrap-Portfolio/"></a></button>

        </div>
        
    ); 
}

export default Home; 
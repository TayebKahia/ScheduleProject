import React from "react";
import Form from "./Form";

function Main (){
    return(
        <main>
            <div className="esi-key">
                <h2> <span className="grey">ESI SBA</span> <span className="LColor">ACCOUNT</span></h2>
                <h2 className="sign-in">Sign In</h2>
            </div>
            <div className="login-part">
                <Form />
                <div className="line"></div>
                <span className="login-text forget-password">FORGET YOUR PASSWORD ?</span>
                <span className="login-text enter-as-student">ENTER AS A STUDENT ?</span>
            </div>
        </main>
    )
}

export default Main ; 
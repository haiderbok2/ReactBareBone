import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Signin extends Component {

    render(){
        return (
               
               <div class="row" style={{marginTop: 250}}>
                <form class="col s12">

                <div class="row">
                    <div class="input-field col s12">
                    <input id="email" type="email" class="validate" />
                    <label for="email">Email</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12">
                    <input id="password" type="password" class="validate" />
                    <label for="password">Password</label>
                    </div>
                </div>
                </form>
                
                <Link to="/home" class="waves-effect waves-light btn">button</Link>

                
            </div>
        )
    }
}


export default Signin;
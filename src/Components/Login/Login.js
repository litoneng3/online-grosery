import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css';


const Login = () => {


    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/" } };


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    if(firebase.apps.length===0){
        firebase.initializeApp(firebaseConfig);
    }
  
    const handleGoogleSignIn = () => {
        
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {              
                const {displayName, email}= result.user;
                const signedInUser = {name: displayName, email};
                console.log(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch((error) => {
                var errorMessage = error.message;
            });
    }
    return (
        <div className="col-md-12 mt-5 text-center col-sm-12 text-center" >
            <button className="signedIn btn btn-success" onClick={handleGoogleSignIn}>Continue With Google</button>
        </div>
    );
};

export default Login;
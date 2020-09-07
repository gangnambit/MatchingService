import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { auth } from "../_action/user_action.js";

export default function (SpecificComponent, option, adminRoute = null) {

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((response) => {
        // console.log(response);
        
        //login 안한상태
        if(!response.payload.isAuth) {
            if(option) {
                props.history.push('/login')
            }
        } else { //로그인 한 상태
            if(adminRoute && !response.payload.isAdmin) {
                props.history.push('/')
            } else {
                if(option===false) {
                    props.history.push('/')
                }
            }
        }
      });

      axios.get("http://localhost:5000/api/users/auth",{withCredentials: true});
    }, []);

    return (
        <SpecificComponent />
    )
  }

  return AuthenticationCheck;
}

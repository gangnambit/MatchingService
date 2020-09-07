import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

function LandingPage(props) {

    const onClickHandler = ()=>{
        axios.get('http://localhost:5000/api/users/logout',{withCredentials:true})
        .then(response => {
            if(response.data.success){
                props.history.push('/login')
            } else {
                alert('Fail to Logout')
            }
        })
    }

    return (
        <div>
            LandingPage
            <button onClick={onClickHandler}>Logout</button>
        </div>
    )
}

export default withRouter(LandingPage)

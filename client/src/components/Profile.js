import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import { Switch, Route } from "react-router-dom";
import {checkAuth} from '../actions/auth'
import {connect} from 'react-redux'
import LoginForm from './LoginForm';

const Profile = ({dispatch, isLogged, user}) => {
    const onClick = () => {
        dispatch(checkAuth())
    }
    
    return (
        <div>
            <Link to='/login'><button className='btn btn-success' >Login</button></Link>
            <button className='btn btn-danger'>Register</button>
            {!isLogged ? <span>Not Logged</span>: <span>Logged</span>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged,
    user: state.auth.user
})

export default connect(mapStateToProps)(Profile);

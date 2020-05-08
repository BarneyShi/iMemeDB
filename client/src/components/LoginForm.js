import React from 'react'
import {log_in} from '../actions/login'
import {connect} from 'react-redux'
import {Cookies} from 'react-cookie'
import {useHistory} from 'react-router'


const LoginForm = ({dispatch, isLoggedin, user}) => {
    let history = useHistory();
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(log_in())
        // let cookie = new Cookies()
        // console.log(cookie.get('token'))
        history.push('/')

    }
    return (
        <div>
            <form onSubmit={onSubmit}>
            <label htmlFor='email'>Email: </label>
            <input id='email' name='email' placeholder='Email' />
            <label htmlFor='password'>Passowrd: </label>
            <input id='password' name='password' placeholder='Password' />
            <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => ({
     isLoggedin: state.login.isLogged,
     user: state.login.user
})

export default connect(mapStateToProps)(LoginForm);
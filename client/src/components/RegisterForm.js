import React from 'react';
import {register} from '../actions/register'
import {connect} from 'react-redux'
import {useHistory} from 'react-router'


const RegisterForm = ({dispatch, isRegistered, user}) => {
    let history = useHistory();
    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(register());
        history.push('/')
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor='username'>Username</label>
                <input id='username' name='username' placeholder='Username' />
                <label htmlFor='email'>Email</label>
                <input id='email' name='email' placeholder='Email' />
                <label htmlFor='password'>Passowrd</label>
                <input id='password' name='password' placeholder='Password'/>
                <button className='btn btn-primary' >Submit</button>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isRegistered: state.register.isRegistered,
    user: state.register.user
})
export default connect(mapStateToProps)(RegisterForm);
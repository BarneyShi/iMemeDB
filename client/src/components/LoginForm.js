import React from 'react'

const LoginForm = () => {
    return (
        <div>
            <form >
            <label for='email'>Email: </label>
            <input id='email' name='email' placeholder='Email' />
            <label for='password'>Passowrd: </label>
            <input id='password' name='password' placeholder='Password' />
            <button className='btn btn-primary'>Submit</button>
            </form>
        </div>
    )
}
export default LoginForm;
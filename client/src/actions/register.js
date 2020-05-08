import axios from 'axios'

export const REGISTERED = 'REGISTERED'
export const NOT_REGISTER = 'NOT_REGISTER'

export const register_type = (user) => ({
    type: REGISTERED,
    payload: user
})
export const not_register_type = () =>({
    type: NOT_REGISTER
})

export const register = () => dispatch => {
    axios.post('http://localhost:3000/user/register', {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    })
    .then(result => dispatch(register_type(result.data) ))
}
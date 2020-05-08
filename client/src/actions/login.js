import axios from 'axios'
export const LOGGEDIN = 'LOGGEDIN'
export const NOT_LOGGEDIN = 'NOT_LOGGEDIN'

const loggin_type = (arg) => ({
    type: LOGGEDIN,
    payload: arg
})

export const log_in = () => dispatch => {
    axios.post('http://localhost:3000/user/login',{
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    })
    .then(res => {
        dispatch(loggin_type(res.data.token))
    })
}
 
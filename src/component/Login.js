import React, { useState } from 'react';

const Login = () => {
    const [LoginList, setLoginList] = useState([])
    const [LoginForm, setLoginForm] = useState({
        userName: "",
        password: ""
    });

    const fn_setField = (event) => {
        const { name, value } = event.target;
        setLoginForm((obj) => ({ ...obj, [name]: value }));
    }
    const fn_postData = () => {
        console.log(JSON.stringify(LoginForm));
        setLoginList([...LoginList, LoginForm]);
    }
    return (
        <div className='row'>
            <div className='col-6' >
                <label>User Name</label>
                <input type="text" className='form-control' name='userName' value={LoginForm.userName} onChange={fn_setField}></input>
            </div>
            <div className='col-6' >
                <label>Password</label>
                <input type="text" className='form-control' name='password' value={LoginForm.password} onChange={fn_setField}></input>
            </div>
            <div className='col-12' >
                <button type="button" className='btn btn-success pull-right' onClick={fn_postData}>submit</button>
            </div>
            <div className='col-12'>
                <table>
                    <thead>
                        <tr>
                            <th>Srno</th>
                            <th>User Name</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            LoginList.map((item, index) => {
                                return (<tr>
                                    <td>{index + 1}</td>
                                    <td>{item.userName}</td>
                                    <td>{item.password}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Login;
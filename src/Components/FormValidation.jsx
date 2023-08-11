import { useState } from "react";
const FormValidation = () => {

    const[input,setInput] = useState({
        email : '',
        password : ''
    })
    const[formerror,setFormError] = useState({});

    const handleChange = (e) => {
        setInput({
            ...input,[e.target.name] : e.target.value
        })
    }

    const handleSubmit = () => {
        const err = {};
        if(!input.email){
            err.email = "Name is required!";
        }
        if(!input.password){
            err.password = "Password is required!";
        }
        setFormError(err);
    }

    return (
        <>
            <div class='box'>
                <div class='box-form'>
                    <div class='box-login-tab'></div>
                    <div class='box-login-title'>
                        <div class='i i-login'></div><h2>LOGIN</h2>
                    </div>
                    <div class='box-login'>
                        <div class='fieldset-body' id='login_form'>
                            <button onclick="openLoginInfo();" class='b b-form i i-more' title='Mais Informações'></button>
                            <p class='field'>
                                <label for='user'>E-MAIL</label>
                                <input type='text' id='user' title='Username'  name="email" onChange={handleChange}/>
                                <span style={{color : 'red'}}>{formerror.email}</span>
                            </p>
                            <p class='field'>
                                <label for='pass'>PASSWORD</label>
                                <input type='password' id='pass' title='Password' name="password" onChange={handleChange} />
                                <span style={{color : 'red'}}>{formerror.password}</span>
                            </p>

                            <label class='checkbox'>
                                <input type='checkbox' value='TRUE' title='Keep me Signed in' /> Keep me Signed in
                            </label>

                            <input type='submit' value="submit" title='Get Started'  onClick={ () => handleSubmit() } />
                        </div>
                    </div>
                </div>
                <div class='box-info'>
                    <p><button onclick="closeLoginInfo();" class='b b-info i i-left' title='Back to Sign In'></button><h3>Need Help?</h3>
                    </p>
                    <div class='line-wh'></div>
                    <button onclick="" class='b-support' title='Forgot Password?'> Forgot Password?</button>
                    <button onclick="" class='b-support' title='Contact Support'> Contact Support</button>
                    <div class='line-wh'></div>
                    <button onclick="" class='b-cta' title='Sign up now!'> CREATE ACCOUNT</button>
                </div>
            </div>  
        </>
    )
}
export default FormValidation;
import { useState } from 'react'
import './form.css'

export default function Form(){
    let [name ,setName] = useState("");
    let [age ,setAge] = useState(0);
    let [email ,setEmail] = useState("");
    let [pass ,setPass] = useState("");


    function formSubmit(e){
        e.preventDefault();
        const form = e.target
        setName(form.name.value)
        setAge(Number(form.age.value))
        setEmail(form.email.value)
        setPass(form.pass.value)
        form.reset();
    }


    return(
        <>
            <form className="container" onSubmit={formSubmit}>
                <div id='field'>
                    <label htmlFor="name">Name :</label>
                    <input type="text" name="name" id="name" placeholder="Enter your name" required />
                </div>
                <div id='field'>
                    <label htmlFor="age">Age :</label>
                    <input type="number" name="age" id="age" placeholder='Enter your age' required />
                </div>
                <div id='field'>
                    <label htmlFor="email">Email :</label>
                    <input type="email" name="email" id="email" placeholder='Enter your Email ID' required />
                </div>
                <div id='field'>
                    <label htmlFor="pass">Password :</label>
                    <input type="passwor" name="pass" id="pass" placeholder='Enter Your Password' required />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div className="container">
                name: {name} <br />
                age : {age} <br />
                email : {email} <br />
                pass : {pass} <br />
            </div>
        </>
    )
}
import { useState } from 'react'
import './form.css'

export default function Form(){
    let [name, setName] = useState("");
    let [age, setAge] = useState("");
    let [email, setEmail] = useState("");
    let [pass, setPass] = useState("");


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
        <main className="form-page">
            <section className="form-shell">
                <div className="form-intro">
                    <span className="eyebrow">React Form</span>
                    <h1>Tell us who you are</h1>
                    <p>Submit your details and watch the profile preview update instantly.</p>
                </div>

                <form className="container form-card" onSubmit={formSubmit}>
                    <div className="field">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="field">
                        <label htmlFor="age">Age</label>
                        <input type="number" name="age" id="age" placeholder="Enter your age" min="1" required />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email ID" required />
                    </div>
                    <div className="field">
                        <label htmlFor="pass">Password</label>
                        <input type="password" name="pass" id="pass" placeholder="Enter your password" required />
                    </div>
                    <button type="submit">Submit Details</button>
                </form>

                <aside className="container preview-card">
                    <span className="eyebrow">Live Preview</span>
                    <h2>{name || "Your profile"}</h2>
                    <dl>
                        <div>
                            <dt>Age</dt>
                            <dd>{age || "Not submitted"}</dd>
                        </div>
                        <div>
                            <dt>Email</dt>
                            <dd>{email || "Not submitted"}</dd>
                        </div>
                        <div>
                            <dt>Password</dt>
                            <dd>{pass ? "*".repeat(pass.length) : "Not submitted"}</dd>
                        </div>
                    </dl>
                </aside>
            </section>
        </main>
    )
}

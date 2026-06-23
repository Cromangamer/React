function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
}


function Form(){
    return(
        <div>
            <h1>Form</h1>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                <br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email"  />
                <br />
                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form;
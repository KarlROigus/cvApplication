import { useState } from "react";
import TextField from "./TextField";


function GeneralParent() {

    const [isFormVisible, setFormVisible] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    function handleNameClick(e) {
        setName(e.target.value);
    } 

    function handleEmailClick(e) {
        setEmail(e.target.value);
    }

    function handlePhoneClick(e) {
        setPhoneNumber(e.target.value); 
    }

    function toggleFormVisibility() {
        setFormVisible(!isFormVisible);
    }


    return (
        <div className="container">
            <div className="containerLeft">
                <button className="containerButton" onClick={toggleFormVisibility}>
                General Information
                </button>
                {isFormVisible && (
                    <form>
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input value={name} type="text" id="name" name="name" onChange={handleNameClick}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email: </label>
                        <input value={email} type="email" id="email" name="email" onChange={handleEmailClick}/>
                    </div>
                    <div>
                        <label htmlFor="phoneNumber">Phone: </label>
                        <input value={phoneNumber} type="text" id="phoneNumber" name="phoneNumber" onChange={handlePhoneClick}/>
                    </div>
                    </form>
                )}
            </div>
            <div className="containerRight">
                <TextField text={name} imgSrc="/person.svg" />
                <TextField text={email} imgSrc="/email.svg" />
                <TextField text={phoneNumber} imgSrc="/phone.svg" />
            </div>                 
        </div>
    )
}

export default GeneralParent
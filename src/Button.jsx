import GeneralParent from "./GeneralParent";
import { useState } from "react";

function Button() {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [inputText, setInputText] = useState("hi");

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);

    }

    function handleClick(e) {
        setInputText(e.target.value);
    }

    return (
    <div>
        <button className="general" onClick={toggleFormVisibility}>
        {isFormVisible ? 'Hide Form' : 'Show Form'}
        </button>
        
        {isFormVisible && (
        <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input value={inputText} type="text" id="name" name="name" onChange={handleClick}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input value={inputText} type="email" id="email" name="email" onChange={handleClick}/>
            </div>
            <button type="submit">Submit</button>
        </form>
        )}
    </div>
    );
};


export default Button
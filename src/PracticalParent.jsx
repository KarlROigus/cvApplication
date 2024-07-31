import { useState } from "react";
import TextField from "./TextField";


function PracticalParent() {

    const [isFormVisible, setFormVisible] = useState(false);

    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [responsibilities, setResponsibilities] = useState("");
    const [yearsWorked, setYearsWorked] = useState("");

    function handleCompanyClick(e) {
        setCompany(e.target.value);
    } 

    function handlePositionClick(e) {
        setPosition(e.target.value);
    }

    function handleResponsibilitiesClick(e) {
        setResponsibilities(e.target.value); 
    }

    function handleYearsWorkedClick(e) {
        setYearsWorked(e.target.value);
    }

    function toggleFormVisibility() {
        setFormVisible(!isFormVisible);
    }


    return (
        <div className="container">
            <div className="containerLeft">
                <button className="containerButton" onClick={toggleFormVisibility}>
                Practical Experience
                </button>
                {isFormVisible && (
                    <form>
                    <div>
                        <label htmlFor="company">Company: </label>
                        <input value={company} type="text" id="company" name="company" onChange={handleCompanyClick}/>
                    </div>
                    <div>
                        <label htmlFor="position">Position Title: </label>
                        <input value={position} type="text" id="position" name="position" onChange={handlePositionClick}/>
                    </div>
                    <div>
                        <label htmlFor="responsibilities">Responsibilities: </label>
                        <input value={responsibilities} type="text" id="responsibilities" name="responsibilities" onChange={handleResponsibilitiesClick}/>
                    </div>
                    <div>
                        <label htmlFor="yearsWorked">Years Worked: </label>
                        <input value={yearsWorked} type="number" id="yearsWorked" name="yearsWorked" onChange={handleYearsWorkedClick}/>
                    </div>
                    </form>
                )}
            </div>
            <div className="containerRight">
                <TextField text={company} imgSrc="/person.svg" />
                <TextField text={position} imgSrc="/email.svg" />
                <TextField text={responsibilities} imgSrc="/phone.svg" />
                <TextField text={yearsWorked} imgSrc="/phone.svg" />
            </div>                 
        </div>
    )
}

export default PracticalParent
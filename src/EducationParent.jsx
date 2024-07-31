import { useState } from "react";
import TextField from "./TextField";


function EducationParent() {

    const [isFormVisible, setFormVisible] = useState(false);

    const [nameOfSchool, setNameOfSchool] = useState("");
    const [titleOfStudy, setTitleOfStudy] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    function handleSchoolClick(e) {
        setNameOfSchool(e.target.value);
    } 

    function handleTitleClick(e) {
        setTitleOfStudy(e.target.value);
    }

    function handleStartClick(e) {
        setStartDate(e.target.value); 
    }

    function handleEndClick(e) {
        setEndDate(e.target.value);
    }

    function toggleFormVisibility() {
        setFormVisible(!isFormVisible);
    }


    return (
        <div className="container">
            <div className="containerLeft">
                <button className="containerButton" onClick={toggleFormVisibility}>
                Education
                </button>
                {isFormVisible && (
                    <form>
                    <div>
                        <label htmlFor="school">School: </label>
                        <input value={nameOfSchool} type="text" id="school" name="school" onChange={handleSchoolClick}/>
                    </div>
                    <div>
                        <label htmlFor="titleofstudy">Email: </label>
                        <input value={titleOfStudy} type="text" id="titleofstudy" name="titleofstudy" onChange={handleTitleClick}/>
                    </div>
                    <div>
                        <label htmlFor="startdate">Start date: </label>
                        <input value={startDate} type="date" id="startdate" name="startdate" onChange={handleStartClick}/>
                    </div>
                    <div>
                        <label htmlFor="enddate">End date: </label>
                        <input value={endDate} type="date" id="enddate" name="enddate" onChange={handleEndClick}/>
                    </div>
                    </form>
                )}
            </div>
            <div className="containerRight">
                <TextField text={nameOfSchool} imgSrc="/building.svg" />
                <TextField text={titleOfStudy} imgSrc="/school.svg" />
                <TextField text={startDate} imgSrc="/numbers.svg" />
                <TextField text={endDate} imgSrc="/numbers.svg" />
            </div>                 
        </div>
    )
}

export default EducationParent
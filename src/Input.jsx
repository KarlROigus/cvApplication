function Input({label, value, handleChange} ) {

    return (
        <div className="inputcombo">
            <label>{label}</label>
            <input type="text" value={value} onChange={handleChange}/>
        </div>
    )
}

export default Input
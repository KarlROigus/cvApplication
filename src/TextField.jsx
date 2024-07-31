function TextField({ text, imgSrc }) {
    return (
        <div className="containerText">
            <img src={imgSrc}/>
            <p>{text}</p>
        </div>
    )
}

export default TextField
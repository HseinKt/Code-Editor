const CodeButton = (props) => {
    return (
        <button onClick={props.onClick} className="coding_button">{props.children}</button>
    )

}
export default CodeButton;

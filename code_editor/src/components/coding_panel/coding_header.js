import CodeButton from "./code_button";

const CodingHeader = () => {
    return (
        <div className="coding_header">
            <ul>
                <li>
                    <CodeButton>save</CodeButton>
                </li>
                <li>
                    <CodeButton>Run</CodeButton>
                </li>
            </ul>
        </div>
    )
}

export default CodingHeader;
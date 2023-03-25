import CodeButton from "./code_button";
import "./coding_header.css";
import SavingInput from "./saving_input";
const CodingHeader = (props) => {
  return (
    <div className="coding_header">
      <ul>
        {props.isSaving ? (
          <SavingInput change = {props.onChange} onClick = {props.onSaveClassName} />
        ) : (
          <li>
            <CodeButton onClick={props.onSave}>save</CodeButton>
          </li>
        )}

        <li>
          <CodeButton onClick={props.onshowfiles}>My Files</CodeButton>
        </li>
        <li>
          <CodeButton onClick={props.onRun}>Run</CodeButton>
        </li>
      </ul>
    </div>
  );
};

export default CodingHeader;

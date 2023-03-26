import CodeButton from "./code_button";

const SavingInput = (props) => {
  return (
    <li className="saving-input">
      <input onChange={props.change} className="save_input" type="text" placeholder="className" />
      <CodeButton  onClick={props.onClick}>save</CodeButton>
    </li>
  );
};

export default SavingInput;

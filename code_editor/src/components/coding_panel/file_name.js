import UseHttp from "../../hooks/http-hook";

const FileName = (props) => {
  return <p onClick={() => props.onClick(props.name)}>{props.name}</p>;
};
export default FileName;

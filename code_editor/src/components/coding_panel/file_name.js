import UseHttp from "../../hooks/http-hook";

const getCode = (name) => {
  console.log("test");
};

const FileName = (props) => {
  return <p onClick={() => getCode(props.name)}>{props.name}</p>;
};
export default FileName;

import FileName from "./file_name";
import UseHttp from "../../hooks/http-hook";

const token = localStorage.getItem("token");

const data = await UseHttp("get_Files_Names", {
  Authorization: "Bearer" + token,
});

const MyFiles = () => {
  return (
    <div className="my-files">
      <h4>My files</h4>
      <hr></hr>
      {data.map((item) => (
        <FileName key={item.id} name={item.name} />
      ))}
    </div>
  );
};

export default MyFiles;

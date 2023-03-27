import React, { useState, useEffect } from "react";
import FileName from "./file_name";
import UseHttp from "../../hooks/http-hook";

const MyFiles = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const result = await UseHttp("get_files_names", "GET", "", {
        Authorization: "Bearer " + token,
      });
      console.log(result);
      console.log("test");
      setData(result.fileUrls);
    };
    fetchData();
  }, []);

  return (
    <div className="my-files">
      <h4>My files</h4>
      <hr></hr>
      {data.map((item) => (
        <FileName key={item.id} name={item} onClick={props.onClick} />
      ))}
    </div>
  );
};

export default MyFiles;

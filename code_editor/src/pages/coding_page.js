import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-python";

// import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-solarized_dark";
// import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import { useState } from "react";
import CodingHeader from "../components/coding_panel/coding_header";
import MyFiles from "../components/coding_panel/my_files";
import UseHttp from "../hooks/http-hook";
const CodingPage = () => {
  const [showFiles, setShowFiles] = useState(true);
  const [code, setCode] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [output, setOutput] = useState("");
  const toggleShowMyFiles = () => {
    console.log(showFiles);
    setShowFiles(!showFiles);
  };

  const saveHandler = () => {
    setIsSaving(!isSaving);
    console.log(isSaving);
  };
  const runHandler = async () => {
    const formData = new FormData();
    formData.append("code", code);
    const data = await UseHttp(
      "output",
      "POST",
      formData,{
        Authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YxL2xvZ2luIiwiaWF0IjoxNjc5ODY5MDg4LCJleHAiOjE2Nzk4NzI2ODgsIm5iZiI6MTY3OTg2OTA4OCwianRpIjoiejh0NmMxR0JvcThWZ1RvcyIsInN1YiI6IjMiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.o0Oalc1STnfzc7gxGlUodXTOrnj5amx14e345O-P9O8",
      }
      
    );
    setOutput(data.output);
  };
  const savingclassNameHandler = () => {
    console.log("savingclassNameHandler");
    setIsSaving(false);
  };
  const codeHandler = (value) => {
    setCode(value);
  };

  const fileNameChangleHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <CodingHeader
        onSave={saveHandler}
        onshowfiles={toggleShowMyFiles}
        onRun={runHandler}
        onSaveClassName={savingclassNameHandler}
        isSaving={isSaving}
        onChange={fileNameChangleHandler}
      />
      <div className="code">
        <AceEditor
          placeholder="Start Coding... "
          mode="python"
          width="100%"
          height="100%"
          theme="solarized_dark"
          fontSize={20}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={code}
          onChange={codeHandler}
          setOptions={{
            showLineNumbers: true,
            tabSize: 4,
          }}
        />
        <div className="console">
          {showFiles ? (
            <MyFiles />
          ) : (
            <div>
              <label>
                {" "}
                {`->`}output :<br />
              </label>
              <label>{output}</label>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default CodingPage;

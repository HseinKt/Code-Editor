import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-python";

// import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-solarized_dark";
// import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import { useState } from "react";
import CodingHeader from "../components/coding_panel/coding_header";
import MyFiles from "../components/coding_panel/my_files";
const CodingPage = () => {
  const [showFiles, setShowFiles] = useState(true);
  const [code, setCode] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const toggleShowMyFiles = () => {
    console.log(showFiles);
    setShowFiles(!showFiles);
  };

  const saveHandler = () => {
    setIsSaving(!isSaving);
    console.log(isSaving);
  };
  const runHandler = async () => {
    // const data = {
    //   clientId: "917f572690312065e575c94cd5444a8f",
    //   clientSecret:
    //     "ca8d0e47352dfb6b8ffb494523672c72b51e6463539d0ce40651bb84566eb24d",
    //   script: "for i in range(5):\n  print('Hello World!')",
    //   language: "python3",
    //   versionIndex: "4",
    // };
    // const headers = {
    //   "Content-Type": "application/json",
    // };
    // axios
    //   .post("https://api.jdoodle.com/v1/execute", data, { headers })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
  const savingclassNameHandler = () => {
    console.log("savingclassNameHandler");
    setIsSaving(false);
  };
  const codeHandler = (value) => {
    setCode(value);
    console.log(value);
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
              <label> </label>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default CodingPage;

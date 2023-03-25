import AceEditor from "react-ace";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import { useState } from "react";
import CodingHeader from "../components/coding_panel/coding_header";
const CodingPage = () => {
  const [showFiles, setShowFiles] = useState(true);
  const [code, setCode] = useState('');
  const toggleShowMyFiles = () => {
    console.log(showFiles);
    setShowFiles(!showFiles);
  };

  const saveHandler = () => {
    console.log("save");
  };
  const runHandler = () => {
    console.log("run");
  };
  const codeHandler = (value) => {
    setCode(value)
    console.log(value);
  }

  return (
    <>
      <CodingHeader
        onSave={saveHandler}
        onshowfiles={toggleShowMyFiles}
        onRun={runHandler}
      />
      <div className="code">
        <AceEditor
          placeholder="Start Coding... "
          mode="python"
          width="100%"
          theme="tomorrow_night_blue"
          fontSize={20}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={code}
          onChange = {codeHandler}
          setOptions={{
            showLineNumbers: true,
            tabSize: 4,
          }}
        />
        <div className="console">
          {showFiles ? <div>
            alionj
          </div> :  <div>
          <label>
            {" "}
            {`->`}output :<br />
          </label>
          <label> </label>
          </div>}
        </div>
      </div>
    </>
  );
};
export default CodingPage;

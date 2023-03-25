import AceEditor from "react-ace";

import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/theme-monokai";
import { useState } from "react";
import CodingHeader from "../components/coding_panel/coding_header";
const CodingPage = () => {
    const [code,setCode] = useState('')
  return (
    <div>
        <CodingHeader/>
      <AceEditor
        placeholder="Start Coding... "
        mode="python"
        theme="monokai"
        fontSize={20}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value = {code}
        setOptions={{
          showLineNumbers: true,
          tabSize: 4,
        }}
      />
      ;
    </div>
  );
};
export default CodingPage;

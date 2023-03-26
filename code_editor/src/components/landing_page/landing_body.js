import Compilerimage from "../images/compiler.png"
import Serverimage from "../images/servers.png"

const landing_body=()=>{
  return(
    <div className="landing_body">
      <div className="landing_row">
        <div>
          <h2>
            Compile your code with ease using our Python compiler
          </h2>
          <h5>
            Instant IDE
          </h5>
          <h4>
            Code right from your browser
          </h4>
          <p>
            Codeit is the best tool for starting, sharing, and developing
            projects in Python programming language, right from your
            browser.
          </p>
          <button>Start Coding</button>
        </div>
        <div>
          <img src={Compilerimage} height="400px"/>
        </div>
      </div>
      <div className="landing_row">
        <div>
          <img src={Serverimage} height="400px" />
        </div>
        <div>
          <h2>
            Compile your code faster than ever with our high-speed servers
          </h2>
          <p>
            Our Python compiler's high-speed servers ensure faster and 
            efficient code compilation, giving you more time for important 
            project tasks. Enjoy a reliable and stable platform for your 
            code, avoiding costly delays and setbacks.
          </p>
        </div>
      </div>
    </div>
  )
}
export default landing_body
import Compilerimage from "../images/compiler.png"

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
            browser
          </p>
          <button>Start Coding</button>
        </div>
        <div>
          <img src={Compilerimage} height="200px"></img>
        </div>
      </div>
      <div className="landing_row">
        <div>
          Hello World!
        </div>
        <div>
        Hello World!
        </div>
      </div>
    </div>
  )
}
export default landing_body
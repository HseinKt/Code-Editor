import FileName from "./file_name"

const MyFiles = () => {
    return(
        <div className="my-files">
            <h4>
                My files
            </h4>
            <hr></hr>
            <FileName name = {'start'} />
            <FileName name = {'start'} />
            <FileName name = {'start'} />
            <FileName name = {'start'} />
        </div>
    )
}

export default MyFiles
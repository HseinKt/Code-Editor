import Tr from "../admin/tablerows";

const UsersTable = (props) => {
  console.log(props.data)  
  
  return (
    <div className="table-container">
      <table>
        <thead id="thead">
          <tr>
            <th>id</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>is_deleted</th>
          </tr>
        </thead>
        <tbody id="tbody">
          {props.data.map(item =>
            <Tr data = {item}/>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;

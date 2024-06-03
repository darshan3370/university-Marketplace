import "./SaViewPosts.css";
import Sidebar from "../Sidebar/Sidebar";
import Nav from "../Nav/Nav";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

function SaViewPosts() {
  return (
    <div className="student-profile">
      <Sidebar />
      <div className="student-profile-contents">
        <Nav />
        <div>
          <div className="student-profile-dashboard">
            <main className="main">
              <div
                className="chartcontainer"
              >
                <h2>View Posts</h2>
              </div>
              <div>
                <table id="dttable">
                  <thead>
                    <tr>
                      <th>Sr No</th>
                      <th>Student Name</th>
                      <th>Post Description</th>
                      <th>Student Email</th>
                      <th>Student Contact</th>
                      <th>Post Picture</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Siddhant</td>
                      <td>This is the UTA Club and I'm Selling furniture</td>
                      <td>xyz@example.com</td>
                      <td>+1(123)456789</td>
                      <td>2.jpg</td>
                      <td>
                          {" "}<span className="pencil">
                          <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                          Edit</span>{" "}
                        <br/>
                        <span className="trash">
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                          Delete</span>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Keerthana</td>
                      <td>This is the UNT club and I'm selling TV</td>
                      <td>xyz@example.com</td>
                      <td>+1(123)456789</td>
                      <td>1.jpg</td>
                      <td>
                          {" "}<span className="pencil">
                          <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                          Edit</span>{" "}
                        <br/>
                        <span className="trash">
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                          Delete</span>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Darshan</td>
                      <td>This is the UTD club and I'm selling Microwaves</td>
                      <td>xyz@example</td>
                      <td>+1(123)456789</td>
                      <td>s.jpg</td>
                      <td>
                          {" "}<span className="pencil">
                          <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                          Edit</span>{" "}
                        <br/>
                        <span className="trash">
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                          Delete</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaViewPosts;

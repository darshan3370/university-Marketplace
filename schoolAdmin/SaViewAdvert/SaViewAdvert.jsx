import "./BsViewAdvert.css";
import Sidebar from "../Sidebar/Sidebar";
import Nav from "../Nav/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function SaViewAdvert() {
  return (
    <div className="student-profile">
      <Sidebar />
      <div className="student-profile-contents">
        <Nav />
        <div>
          <div className="student-profile-dashboard">
            <main className="main">
              <div className="chartcontainer">
                <h2>View Product Details</h2>
              </div>
              <div>
                <table id="dttable">
                  <thead>
                    <tr>
                      <th>Sr No</th>
                      <th>Advertisement Name</th>
                      <th>Advertisement Description</th>
                      <th>Advertisement Picture</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Red Bull Discount</td>
                      <td>Buy two redbull at 4.59$</td>
                      <td>redbull.jpg</td>
                      <td>
                        <span className="pencil">
                          <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                          Edit
                        </span>
                        &nbsp;
                        <span className="trash">
                          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                          Delete
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>10% Disscount</td>
                      <td>Create Account and get 10% Disscount</td>
                      <td>2.jpg</td>
                      <td>
                        <span className="pencil">
                          <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                          Edit
                        </span>
                        &nbsp;
                        <span className="trash">
                          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                          Delete
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Refer Friend</td>
                      <td>Refer a Frind anf get both 15% Disscount</td>
                      <td>s.jpg</td>
                      <td>
                        <span className="pencil">
                          <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                          Edit
                        </span>
                        &nbsp;{" "}
                        <span className="trash">
                          <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                          Delete
                        </span>
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

export default SaViewAdvert;

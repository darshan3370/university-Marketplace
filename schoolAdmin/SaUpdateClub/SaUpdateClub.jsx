import "./SaUpdateClub.css";
import Sidebar from "../Sidebar/Sidebar";
import Nav from "../Nav/Nav";

function SaUpdateClub() {
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
                <h2>Add Clubs</h2>
              </div>
              <div className="basicform">
                <form>
                  <label>Club Name</label>
                  <input type="text" className="fname" />
                  <br />
                  <br />
                  <label>Club Description:</label>
                  <input type="text" class="lname" />
                  <br />
                  <br />
                  <label>Club Created by:</label>
                  <input type="text" class="lname" />
                  <br />
                  <br />
                  <div className="upd-wrapper">
                    <label>Club total member:</label>
                    <button className="student-btn">Upload Club photo</button>
                    <input type="file" name="profilepic" />
                  </div>

                  <input type="submit" value="Edit club" class="sbmt" />
                </form>
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaUpdateClub;

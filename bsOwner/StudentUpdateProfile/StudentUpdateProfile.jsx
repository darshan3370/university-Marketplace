import Nav from "../Nav/Nav";
import Sidebar from "../Sidebar/Sidebar";


function StudentUpdateProfile() {
  return (
    
    <div className="student-profile">
      <Sidebar />
      <div className="student-profile-contents">
        <Nav />
        <div>
          <div className="student-profile-dashboard">
          <main>
        <div
          className="chartcontainer vertical flat"
          
        >
          <h2>Student Update Profile</h2>
        </div>

        <div className="basicform">
          <form>
            <label>First Name</label>
            <input type="text" className="fname" />
            <br />
            <br />
            <label>Last Name:</label>
            <input type="text" className="lname" />
            <br />
            <br />
            <label>Email:</label>
            <input type="email" className="email" />
            <br />
            <br />
            <label>Password:</label>
            <input type="password" className="pass" />
            <br />
            <br />
            <label>Address:</label>
            <input type="text" className="Add" />
            <br />
            <br />
            <label>Contact number:</label>
            <input type="text" className="no" />
            <br />
            <br />
            <div className="upd-wrapper">
              <label>Profile Pic:</label>
              <button className="btn">Upload Profile picture</button>
              <input type="file" name="profilepic" />
            </div>

            <input type="submit" value="SUBMIT" class="sbmt" />
          </form>
        </div>
      </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentUpdateProfile;

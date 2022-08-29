import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Upload from '../components/photoUpload';
const serverUrl = process.env.REACT_APP_SERVER_URL;

const callTestRoute = async (sub, email) => {
  console.log("Trying the route")
  const req = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sub: sub, email: email })
  }
  try {
    const response = await fetch(`${serverUrl}/api/messages/test-message`, req);
    console.log("Here is the response", response);
  } catch (error) {
    console.log("There was an error: ", error)
  }
};
const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email, sub } = user;

  callTestRoute(sub, email);
  return (
    <div>
      <div className="row align-items-center profile-header">
        <div className="col-md-2 mb-3">
          <img
            src={picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div className="col-md text-center text-md-left">
          <h2>{name}</h2>
          <p className="lead text-muted">{email}</p>
        </div>
      </div>
      <div className="row">
        <Upload />
      </div>
    </div>
  );
};

export default Profile;

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Upload from '../components/photoUpload';
const serverUrl = process.env.REACT_APP_SERVER_URL;

const Profile = () => {
  const { user } = useAuth0();
  const { name, picture, email, sub } = user;

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

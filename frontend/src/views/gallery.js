import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react'
import Upload from '../components/photoUpload';
import { useAuth0 } from '@auth0/auth0-react';
const serverUrl = process.env.REACT_APP_SERVER_URL;


export default function Gallery() {

  const [imageIds, setImageIds] = useState();
  const { user, isAuthenticated } = useAuth0();

  const loadImages = async () => {
    try {
      const res = await fetch(`${serverUrl}/images/gallery`, {
        method: 'POST',
        body: JSON.stringify({ user_id: user.sub }),
        headers: { 'Content-type': 'application/json' }
      })
      const data = await res.json();
      setImageIds(data);
      console.log("Here are the images", data)
    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    loadImages();
  }, [])

  return (
    isAuthenticated && (

      <div className="container">
        <h1 className="title">My Logos</h1>
        {imageIds && imageIds.map((imageId, index) =>
          <Image
            key={index}
            cloud_name="dmta8vish"
            publicId={imageId}
            width="300"
            crop="scale"
          />
        )}
      </div>
    )
  );
};

import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ImageGrid from '../components/imageGrid/imageGrid'
import EditImages from '../components/editImage';

const serverUrl = process.env.REACT_APP_SERVER_URL;


export default function Gallery() {

  const [imageIds, setImageIds] = useState();
  const [toggleImages, setToggleImages] = useState(true);
  const { user, isAuthenticated } = useAuth0();
  const { sub } = user;

  const loadImages = async () => {
    console.log("loading the images");
    try {
      const res = await fetch(`${serverUrl}/images/gallery`, {
        method: 'POST',
        body: JSON.stringify({ user_id: user.sub }),
        headers: { 'Content-type': 'application/json' }
      })
      const data = await res.json();
      setImageIds(data);
    } catch (e) {
      console.log(e)
    }
  }

  const handleDelete = async (imageId) => {
    try {
      const res = await fetch(`${serverUrl}/images/delete`, {
        method: 'POST',
        body: JSON.stringify({ imageId: imageId }),
        headers: { 'Content-type': 'application/json' }
      })
      const response = await res.json();
      loadImages();
    } catch (e) {
      console.log(e)
    }
  }

  const handleUpload = async (image) => {
    try {
      const res = await fetch(`${serverUrl}/images/upload`, {
        method: 'POST',
        body: JSON.stringify({ data: image, user_id: sub }),
        headers: { 'Content-type': 'application/json' }
      })
      const response = await res.json();
      const updatedArray = [...imageIds, response.msg]
      setImageIds(updatedArray);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    loadImages();
  }, [])

  return (
    isAuthenticated && (
      <div>
        <div>
          <h1 className="title" style={{ display: 'inline-block' }}>My Logos</h1>
          <button className="btn btn-primary" style={{ float: 'right' }} onClick={(e) => setToggleImages(!toggleImages)}>{toggleImages ? "Edit images" : "Show Gallery"}</button>
        </div >
        {toggleImages && imageIds ?
          <ImageGrid imageIds={imageIds}></ImageGrid>
          :
          <EditImages
            imageIds={imageIds}
            handleDelete={event => handleDelete(event)}
            handleUpload={event => handleUpload(event)}>
          </EditImages>
        }
      </div >
    )
  )
}

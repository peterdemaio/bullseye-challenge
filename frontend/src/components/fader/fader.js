import React, { useState, useEffect } from 'react'
import { Image } from 'cloudinary-react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import './fader.css'

const Fader = ({ imageIds }) => {
    const [fadeProp, setFadeProp] = useState({
        fade: 'fade-in'
    })

    const randomImageArray = []


    useEffect(() => {
        const timeout = setInterval(() => {
            if (fadeProp.fade === 'fade-in') {
                setFadeProp({
                    fade: 'fade-out'
                })
            } else {
                setFadeProp({
                    fade: 'fade-in'
                })
            }
        }, 1000);
        return () => clearInterval(timeout)
    }, [fadeProp])

    return (
        <ImageList cols={3} rowHeight={300}>
            {imageIds && imageIds.map((imageId, index) => (
                <ImageListItem key={index}>
                    <div className={fadeProp.fade}>
                        <Image
                            cloud_name="dmta8vish"
                            publicId={imageId}
                            width="300"
                            height="300"
                            crop="scale"
                        />
                    </div>
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default Fader;
import React, { useState, useEffect } from 'react'
import { Image } from 'cloudinary-react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import './fader.css'

const Fader = ({ imageIds }) => {
    const [fadeProp, setFadeProp] = useState({ fade: 'fade-in' })
    //const [imagesToReplace, setImagesToReplace] = useState([])
    //const [randomIndexes, setRandomIndexes] = useState([])

    const randomIndexes = []
    const randomizeGallery = (images) => {

        do {
            let n = Math.floor(Math.random() * images.length) + 0 //Get a random index of our images array
            if (randomIndexes.indexOf(n) === -1) { // check if that random number is already in our random index array
                randomIndexes.push(n)  // if it isn't, add it.
            }
        } while (randomIndexes.length < 3) // run until we get 3 different indexes
    }



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
        }, 5000);
        return () => clearInterval(timeout)
    }, [fadeProp])

    imageIds && randomizeGallery(imageIds)

    return (
        <ImageList cols={4} rowHeight={300}>
            {imageIds && imageIds.map((imageId, index) => (
                <ImageListItem key={index} >
                    <div className={randomIndexes.indexOf(index) !== -1 ? fadeProp.fade : ''}>
                        <Image
                            cloud_name="dmta8vish"
                            publicId={imageId}
                            width="200"
                            height="200"
                            crop="scale"
                        />
                    </div>
                </ImageListItem>
            ))
            }
        </ImageList >
    )
};

export default Fader;
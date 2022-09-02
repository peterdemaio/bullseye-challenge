import React, { useState, useEffect } from 'react'
import { Image } from 'cloudinary-react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import './imageGrid.css'


const Fader = ({ imageIds }) => {

    const [displayArray, setDisplayArray] = useState(imageIds.slice(0, 12));
    let indexesToReplace = []

    const randomizeIndexes = () => {
        let oldIndexes = indexesToReplace
        indexesToReplace = [];
        while (indexesToReplace.length < 3) {
            let n = Math.floor(Math.random() * 12) //Get a random index of our images array
            if (indexesToReplace.indexOf(n) === -1 && oldIndexes.indexOf(n) === -1) { // check if that random number is already in our random index array
                indexesToReplace.push(n)  // if it isn't, add it.
            }
        }
    };

    const replaceImages = () => {
        let tempArray = [...displayArray];
        for (let index of indexesToReplace) {
            let n = Math.floor(Math.random() * imageIds.length) //Get a random index of our images array
            while (tempArray.includes(imageIds[n]) === false) { // This code should check if our displayArray already has the image we're trying to add, and if it doesn't, skip it. 
                tempArray.splice(index, 1, imageIds[n])
            } //This ran into an infinite loop though when it skipped, and I'm not sure how to make it just try again.
        }
        setDisplayArray(tempArray);
    }

    useEffect(() => {
        const timeout = setInterval(() => {
            randomizeIndexes();
            replaceImages();
        }, 2000);
        return () => clearInterval(timeout)
    }, [])


    return (

        <ImageList cols={4} rowHeight={300}>
            {displayArray.map((imageId, index) => (
                < ImageListItem key={index} >
                    <div
                        className={indexesToReplace.indexOf(index) !== -1 ? 'fade-in' : ''}
                    >
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
}

export default Fader;
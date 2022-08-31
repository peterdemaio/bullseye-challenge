import React from "react";
import { Image } from 'cloudinary-react'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

const editImage = ({ imageIds, handleDelete }) => {
    return (
        <ImageList cols={3} rowHeight={300}>
            {imageIds && imageIds.map((imageId, index) => (
                <ImageListItem key={index}>
                    <ImageListItemBar
                        sx={{
                            background:
                                'rgba(0, 0, 0, 0)',
                        }}
                        position="top"
                        actionIcon={
                            <IconButton
                                sx={{ color: 'white' }}
                                aria-label={`logo`}
                            >
                                <Icon>
                                    <span
                                        className="material-symbols-outlined"
                                        onClick={() => {
                                            if (window.confirm('Are you sure you wish to delete this image?'))
                                                handleDelete(imageId)
                                        }}
                                    >
                                        delete
                                    </span>
                                </Icon>
                            </IconButton>
                        }
                        actionPosition="left"
                    />
                    <Image
                        cloud_name="dmta8vish"
                        publicId={imageId}
                        width="300"
                        height="300"
                        crop="scale"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

export default editImage
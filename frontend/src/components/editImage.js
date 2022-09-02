import React from "react";
import { Image } from 'cloudinary-react'
import Upload from '../components/photoUpload/photoUpload'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

const editImage = ({ imageIds, handleDelete, handleUpload }) => {
    return (
        <ImageList cols={4} rowHeight={300}>
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
                                sx={{ color: 'black' }}
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
                        width="200"
                        height="200"
                        crop="scale"
                    />
                </ImageListItem>
            ))}
            <ImageListItem>
                <Upload
                    handleUpload={event => handleUpload(event)}>
                </Upload>
            </ImageListItem>
        </ImageList>
    );
}

export default editImage
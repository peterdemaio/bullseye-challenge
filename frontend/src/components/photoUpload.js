import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
const serverUrl = process.env.REACT_APP_SERVER_URL;


const Upload = ({ handleUpload }) => {
    const [fileInputState, setFileInputState] = useState('');
    const [previewSource, setPreviewSource] = useState('');


    const handleInput = (e) => {
        const file = e.target.files[0];
        previewFile(file);
    }
    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);
        }
    }
    const handleSubmitFile = (e) => {
        e.preventDefault();
        if (!previewSource) return;
        handleUpload(previewSource);
        setPreviewSource('')
    }

    return (
        <div>
            <h1>Upload</h1>
            <form onSubmit={handleSubmitFile} className="form">
                <input
                    type="file"
                    name="image"
                    onChange={handleInput}
                    value={fileInputState}
                />
                <button className="btn btn-primary" type="submit">
                    Submit
                </button>
            </form>
            {previewSource && (
                <img
                    src={previewSource}
                    alt="chosen image"
                    style={{ height: '300px' }}
                />
            )}
        </div>
    );
}

export default Upload;
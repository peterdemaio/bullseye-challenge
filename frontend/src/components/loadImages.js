// import React, { useState } from 'react';


// export default function loadImages() {

//     const [gallery, setGallery] = useState();
//     const loadImages = async () => {
//         try {
//             const res = await fetch(`${serverUrl}/images/gallery`, {
//                 method: 'POST',
//                 body: JSON.stringify({ user_id: user.sub }),
//                 headers: { 'Content-type': 'application/json' }
//             })
//             const data = await res.json();
//             setGallery(data);
//             console.log('Here is the data', data)
//             console.log('Here is the gallery', gallery)
//         } catch (e) {
//             console.log(e)
//         }
//     }

//     loadImages();
// } 
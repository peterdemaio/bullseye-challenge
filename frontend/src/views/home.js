import React from "react";


const Home = () => {

  return (
    <>
      <h1>Welcome to my app</h1>
      <i>You will have to login using Auth0 in order to proceed. Once you do, click on the gallery link to see your logos and upload new ones!</i>
      <h3>Here are a couple of notes on the project</h3>
      <ul>
        <li>I decided to use a 3rd party auth provider to make sure it was done right. Auth0 is easy to incorporate</li>
        <li>Since I only needed a photo list and nothing else from a database, I used a 3rd party image hosting side. No database required! If you want me to write some SQL to show I know it, I can. If you can store everyting in the cloud though these days, that's easier.</li>
        <li> A few parts proved too tricky to me, though I feel like I am very close</li>
        <ol>
          <li>Limiting the number of images to three. Sometimes more than three get changed and I don't know why. </li>
          <li>Making sure the same logo doens't appear twice. I have somethign in place to catch that, but I can't quite get the syntax right to make it move on if it does have that logo and try again.</li>
          <li>I programatically add a css class if it's a new item, but it's not showing the fade in and out. I can get the images to flip upside down if that iterest you 🙃 </li>
        </ol>
      </ul>
      <h3>Overall thoughts</h3>
      <p>I'm overall pleased with the effort I made. I haven't used Auth0, Cloudinary, or React Hooks before (I learned the version of react right before hooks were introduced), and I haven't used react at all in about two years. I think given how much I accomplished this week on this project, with just a little bit of help at the end needed, I can pick right back up where I left off using modern languages.</p>
    </>
  )
};

export default Home;

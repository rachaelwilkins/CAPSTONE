import React from 'react';

const HomePage = () => {
    return (
        <div className="homePage">
          <h1>whitesneakerhub.</h1>
          <h2>all white sneakers, all here.</h2>
          <button class="button"><a href="/men" color='white'>men.</a></button>
          <button class="button"><a href="/women" color='white'>women.</a></button>
          <button class="button"><a href="/boys" color='white'>boys.</a></button>
          <button class="button"><a href="/girls" color='white'>girls.</a></button>
        </div>
      );
};

export default HomePage;
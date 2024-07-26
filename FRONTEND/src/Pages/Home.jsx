import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate=useNavigate()
  return (
        <div className="homePage"><br></br>
          <h1>whitesneakerhub.</h1>
          <h2>all white sneakers, all here.</h2><br></br>
          <button class="button" onClick={() => navigate("/men")}>shop mens.</button>
          <button class="button" onClick={() => navigate("/women")}>shop womens.</button>
          <button class="button" onClick={() => navigate("/boys")}>shop boys.</button>
          <button class="button" onClick={() => navigate("/girls")}>shop girls.</button>
        </div>
      );
};


import React from 'react';
import Data from './data/Data'; // Data.js 파일에서 데이터를 가져옵니다.
import './App.css'; // 스타일 파일

function App() {
  const { profile, aboutMe } = Data;

  return (
    <div className="app-container">
      <header>
        <h1>{profile.name}</h1>
        <p>{profile.occupation}</p>
        <p>{profile.location}</p>
        <p>{profile.email}</p>
        <p>{profile.telephone}</p>
      </header>

      <section className="about-me">
        <h2>{aboutMe.label}</h2>
        <ul>
          {aboutMe.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;

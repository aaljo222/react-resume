import React from 'react';
import Data from './data/Data'; // Data.js에서 데이터 가져오기
import './App.css'; // 스타일 파일

function App() {
  const { profile, aboutMe, skills, experience } = Data;

  return (
    <div className="app-container">
      {/* Header Section */}
      <header className="header">
        <img src={profile.image} alt="profile" className="profile-image" />
        <h1>{profile.name}</h1>
        <p>{profile.occupation}</p>
        <p>{profile.location}</p>
        <p>{profile.email}</p>
        <p>{profile.telephone}</p>
      </header>

      {/* About Me Section */}
      <section className="section about-me">
        <h2>{aboutMe.label}</h2>
        <ul>
          {aboutMe.description.map((desc, index) => (
            <li key={index}>{desc}</li>
          ))}
        </ul>
      </section>

      {/* Skills Section */}
      <section className="section skills">
        <h2>{skills.technicalLabel}</h2>
        <ul>
          {skills.technicalSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
        <h2>{skills.softLabel}</h2>
        <ul>
          {skills.softSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Experience Section */}
      <section className="section experience">
        <h2>경력</h2>
        {experience.works.map((work, index) => (
          <div key={index} className="experience-item">
            <h3>{work.title}</h3>
            <p>
              {work.period} | {work.company}
            </p>
            <ul>
              {work.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section className="section projects">
        <h2>프로젝트</h2>
        {experience.projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.name}</h3>
            <p>
              {project.period} | {project.company}
            </p>
            <ul>
              {project.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;

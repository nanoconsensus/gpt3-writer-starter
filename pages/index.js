import { useState } from 'react';
const [userInput, setUserInput] = useState('');
import Head from 'next/head';
import Image from 'next/image';
import buildspaceLogo from '../assets/buildspace-logo.png';

const Home = () => {
  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Let me be your coach</h1>
          </div>
          <div className="header-subtitle">
            <h2>Help me to help you</h2>
          </div>
        </div>
    {/* Add this code here*/}
        <div className="prompt-container">
          <textarea
            placeholder="start typing here"
            className="prompt-box"
            value={userInput}
            onChange={onUserChangedText}
/>
              {/* New code I added here */}
  <div className="prompt-buttons">
    <a className="generate-button" onClick={null}>
      <div className="generate">
        <p>Generate</p>
      </div>
    </a>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;

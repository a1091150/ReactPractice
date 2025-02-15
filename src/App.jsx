import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import siriLogo from './assets/siri.png'
import alexaLogo from './assets/alexa.png'
import cortanaLogo from './assets/cortana.png'

import 'bulma/css/bulma.css'
import './App.css'
import ProfileCard from './ProfileCard'

function App() {
  return (
    <div>
      <div className='hero is-primary'>
        <div className='hero-body'>
          <p className='title'>Personal Digital Assistants</p>
        </div>
      </div>

      <div className='container'>
        <section className='section'>
          <div className='columns'>
            <div className='column is-4'>
              <ProfileCard title="Siri" handle="XX" image={siriLogo}></ProfileCard>
            </div>

            <div className='column is-4'>
              <ProfileCard title="Alexa" handle="X" image={alexaLogo}></ProfileCard>
            </div>

            <div className='column is-4'>
              <ProfileCard title="Cortana" handle="XXX" image={cortanaLogo}></ProfileCard>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;

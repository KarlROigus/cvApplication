import React, { useState } from 'react';
import GeneralParent from './GeneralParent.jsx';
import EducationParent from './EducationParent.jsx';
import PracticalParent from './PracticalParent.jsx';

function App() {
  return (
    <>
      <div className="header">
          <h2>CV GENERATOR</h2>
      </div>
      <GeneralParent />
      <EducationParent />
      <PracticalParent />
      <div className="endPart">
        Made by Ruudi
      </div>
    </>
  );
}

export default App;

jsx
import React from 'react';

function GroomsPage() {
  return (
    <div className="grooms-profiles">
      <h2>Grooms Profiles</h2>
      <div className="profile">
        <h3>Groom Name 1</h3>
        <p>Age: 28</p>
        <p>Description: A brief description of the groom.</p>
        <p>Other Information: Additional details here.</p>
      </div>
      <div className="profile">
        <h3>Groom Name 2</h3>
        <p>Age: 32</p>
        <p>Description: A brief description of the groom.</p>
        <p>Other Information: Additional details here.</p>
      </div>
      <div className="profile">
        <h3>Groom Name 3</h3>
        <p>Age: 30</p>
        <p>Description: A brief description of the groom.</p>
        <p>Other Information: Additional details here.</p>
      </div>
    </div>
  );
}

export default GroomsPage;
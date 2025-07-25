jsx
import React from 'react';

function DivorceePage() {
  return (
    <div className="divorcee-page">
      <h2>Divorcee Profiles</h2>
      <div className="profile-container">
        <div className="profile">
          <h3>Name: Profile 1</h3>
          <p>Age: 35</p>
          <p>Description: Short description about person 1.</p>
        </div>
        <div className="profile">
          <h3>Name: Profile 2</h3>
          <p>Age: 40</p>
          <p>Description: Short description about person 2.</p>
        </div>
        <div className="profile">
          <h3>Name: Profile 3</h3>
          <p>Age: 30</p>
          <p>Description: Short description about person 3.</p>
        </div>
      </div>
    </div>
  );
}

export default DivorceePage;
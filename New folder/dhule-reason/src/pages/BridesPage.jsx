jsx
import React from 'react';

function BridesPage() {
  return (
    <section className="brides-profiles">
      <h2>Brides Profiles</h2>
      <div className="profile">
          <h3>Bride Name 1</h3>
          <p>Age: 25</p>
          <p>Description: A brief description of the bride.</p>
          <p>Other Information: Additional details here.</p>
      </div>
      <div className="profile">
          <h3>Bride Name 2</h3>
          <p>Age: 28</p>
          <p>Description: A brief description of the bride.</p>
          <p>Other Information: Additional details here.</p>
      </div>
      <div className="profile">
          <h3>Bride Name 3</h3>
          <p>Age: 22</p>
          <p>Description: A brief description of the bride.</p>
          <p>Other Information: Additional details here.</p>
      </div>
    </section>
  );
}

export default BridesPage;
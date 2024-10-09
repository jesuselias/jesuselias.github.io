// VisitCounter.jsx
import React, { useState, useEffect } from 'react';

function VisitCounter() {
  const [visits, setVisits] = useState(() => {
    const storedVisits = localStorage.getItem('visits');
    return storedVisits ? parseInt(storedVisits, 10) : 0;
  });

  useEffect(() => {
    setVisits(prevVisits => prevVisits + 1);
  }, []);

  useEffect(() => {
    localStorage.setItem('visits', visits.toString());
  }, [visits]);

  return (
    <div className="visit-counter" style={{ fontSize: '22px' }}>
      <span>Visitas: {visits}</span>
    </div>
  );
}

export default VisitCounter;
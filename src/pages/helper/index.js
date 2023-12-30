import { useEffect, useState } from 'react';

function Helper() {
  const [days, setDays] = useState(0);
  useEffect(() => {

  }, []);

  return (
    <div className='content overflow-scroll'>
      <h1>This is Helper Page.</h1>
    </div>
  )
}

export default Helper
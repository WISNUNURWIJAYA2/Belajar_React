import { useState } from 'react';

function Feedback() {
  const [suka, setSuka] = useState(0);
  const [tidaksuka, setTidakSuka] = useState(0);

  return (
    <div>
      <h3>Feedback</h3>
      <button onClick={() => setSuka(suka + 1)}>👍 {suka}</button>
      <button onClick={() => setTidakSuka(tidaksuka + 1)}>👎 {tidaksuka}</button>
    </div>
  );
}

export default Feedback;

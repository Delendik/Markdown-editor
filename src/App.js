import React, { useState } from 'react';
import marked from 'marked';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState('');
  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="App">
      <textarea onChange = {handleChange} />
      <div 
        className="preview"
        dangerouslySetInnerHTML={{__html: marked(markdown)}} 
      />
    </div>
  );
}

export default App;

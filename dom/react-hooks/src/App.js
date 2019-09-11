import React from 'react';
import './App.scss';

import DomUseState from './components/dom/UseState'
import DomUseEffect from './components/dom/useEffect'
import DomuseCallback from './components/dom/useCallback'
import DomUseRef from './components/dom/useRef';

function App() {
  return (
    <div className="App">
      <DomUseRef test='我是父组件的数据' />
    </div>
  );
}

export default App;

document.title = 'React-Hook'
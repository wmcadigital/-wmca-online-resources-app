import React from 'react';
import './App.css';

import Header from './components/Header';
import SideBarFilters from './components/sidebar/SidebarFilters';
import Results from './components/results/Results';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-wide bg-white pad-30">
        <div className="pure-g justify-between">
          <div className="pure-u-1 pure-u-md-1-4">
            <SideBarFilters />
          </div>
          <div className="pure-u-1 pure-u-md-5-8" id="stories">
            <Results />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

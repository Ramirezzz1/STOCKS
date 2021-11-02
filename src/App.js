import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import StockRow from './components/StockRow';



function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="col-md-3 mt-5">
          <div className="card">
              <ul className="list-group list-group-flush">
                <StockRow ticker = "aapl" />
                <StockRow ticker = "goog" />
                <StockRow ticker = "msft" />
                <StockRow ticker = "tsla" />
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

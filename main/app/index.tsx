import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import './index.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'react-loading-skeleton/dist/skeleton.css'

import { store } from "main/shared/state/store";
import { Routing } from "main/pages/Routing";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={ store }>
        <Routing />
      </Provider>
    </BrowserRouter>
  );
}

export default App;

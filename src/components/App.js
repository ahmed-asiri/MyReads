import React from 'react';
import ContentContainer from './ContentContainer';
import ContentPadding from './ContentPadding';
import ControlledCarousel from './ControlledCarousel';

import Header from './Header';
import Navigation from './Navigation';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Header />
        <ControlledCarousel />
        <div className="layout">
          <Navigation />
          <ContentContainer>

          </ContentContainer>
        </div>
      </div>
    );
  }
}

export default App;

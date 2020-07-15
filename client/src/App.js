import React, { lazy, Suspense } from 'react';

// components
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Modal from './components/modal/Modal';
import Navigation from './components/navigation/Navigation';
import Spinner from './components/spinner/Spinner';
// containers
// import Features from './containers/features/Features';
// import Hikes from './containers/hikes/Hikes'; 
// import Main from './containers/main/Main';
// import Subscription from './containers/subscription/Subscription';
// redux
import { store, 
  // persistor 
} from './store';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react'; // localstorage
// scss
import './scss/App.scss';

// react lazy - replaces the imported containers from above
const Features = lazy(() => import('./containers/features/Features'));
const Hikes = lazy(() => import('./containers/hikes/Hikes'));
const Main = lazy(() => import('./containers/main/Main'));
const Subscription = lazy(() => import('./containers/subscription/Subscription'));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Suspense fallback={<Spinner />}>
          <Modal />
          <Navigation />
          <Header />
          <Main />
          <Features />
          <Hikes />
          <Footer />
        </Suspense>
      </div>
    </Provider>
  );
}

export default App;

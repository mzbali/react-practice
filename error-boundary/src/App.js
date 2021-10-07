import Cars from './components/Cars/Cars';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const App = () => {
  return (
    <ErrorBoundary>
      <Cars />
    </ErrorBoundary>
  );
};

export default App;

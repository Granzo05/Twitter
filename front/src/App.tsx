import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'sonner';
import AppRoutes from './routes/AppRoutes';

function App() {

  return (
    <Router>
      <Toaster duration={5000} />
      <AppRoutes />
    </Router>
  );
}

export default App;

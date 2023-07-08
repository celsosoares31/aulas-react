import { createRoot } from 'react-dom/client';
import App from './containers/App';

const container = document.getElementById('root');
const rootContainer = createRoot(container);

rootContainer.render(<App tab='home' />);

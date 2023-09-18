import ReactDOM from 'react-dom/client';

import './assets/styles/index.scss';
import MainProvider from './providers/MainProvider.tsx';
import Router from './router/Router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<MainProvider>
		<Router />
	</MainProvider>
);

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './assets/styles/index.scss';
import MainProvider from './providers/MainProvider.tsx';
import Router from './router/Router.tsx';
import { store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<MainProvider>
			<Router />
		</MainProvider>
	</Provider>
);

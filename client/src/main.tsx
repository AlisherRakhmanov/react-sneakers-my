import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './assets/styles/index.scss';
import ReduxToastr from './components/ui/redux-toastr/ReduxToastr.tsx';
import MainProvider from './providers/MainProvider.tsx';
import Router from './router/Router.tsx';
import { persistor, store } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<ReduxToastr />
			<MainProvider>
				<Router />
			</MainProvider>
		</PersistGate>
	</Provider>
);

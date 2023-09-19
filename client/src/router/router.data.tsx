import Favorite from '../components/screens/favorite/Favorite';
import Home from '../components/screens/home/Home';
import Product from '../components/screens/product/Product';

export const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/product/:slug',
		component: Product
	},
	{
		path: '/favorite',
		component: Favorite
	}
];

export const getStoreLocal = (name: string) => {
	if (typeof name !== 'undefined') {
		const ls = localStorage.getItem(name);
		return ls ? JSON.parse(ls) : null;
	}
	return null;
};

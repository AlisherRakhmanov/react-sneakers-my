import { FC } from 'react';

import SearchField from '../../../ui/search-field/SearchField';

import styles from './Search.module.scss';
import SearchList from './search-list/SearchList';
import { useSearch } from './useSearch';

const Search: FC = () => {
	const { data, isSuccess, searchTerm, handleSearch } = useSearch();
	return (
		<div className={styles.search}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />

			{isSuccess && <SearchList products={data || []} />}
		</div>
	);
};

export default Search;

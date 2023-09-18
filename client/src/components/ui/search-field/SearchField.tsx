import { ChangeEvent, FC } from 'react';
import { MdSearch } from 'react-icons/md';

import styles from './SearchField.module.scss';

interface ISearchField {
	searchTerm: string;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch }) => {
	return (
		<div className={styles.search}>
			<span>
				<MdSearch size={22} />
			</span>
			<input
				type='text'
				placeholder='Поиск...'
				value={searchTerm}
				onChange={handleSearch}
			/>
		</div>
	);
};

export default SearchField;

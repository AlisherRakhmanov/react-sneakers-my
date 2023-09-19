import { FC } from 'react';
import ReduxToastrLib from 'react-redux-toastr';

const ReduxToastr: FC = () => {
	return (
		<ReduxToastrLib
			newestOnTop={false}
			progressBar
			preventDuplicates
			closeOnToastrClick
			timeOut={4000}
			transitionIn='fadeIn'
			transitionOut='fadeOut'
		/>
	);
};

export default ReduxToastr;

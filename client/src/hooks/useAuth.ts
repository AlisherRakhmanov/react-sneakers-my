import { useTypedSelector } from './useTYpedSelector';

export const useAuth = () => useTypedSelector(state => state.user);

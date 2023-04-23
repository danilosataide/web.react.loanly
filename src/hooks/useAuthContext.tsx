import { useContext } from 'react';
import { AuthContext, AuthInterface } from '../contexts/auth';

export function useAuthContext(): AuthInterface {
  const {
    user,
    signIn,
    logOut,
    isLogged
  } = useContext(AuthContext);

  return { user, signIn, logOut, isLogged };
}

//#region Imports

import { createContext, ReactElement, useEffect, useState } from 'react';
import { environment } from '../environments/environment';
import { useApi } from '../hooks/useApi';
import { UserInterface } from '../models/interfaces/user.interface';

//#endregion

//#region ReactElement

export interface AuthInterface {
  user?: UserInterface;
  signIn: (email: string, password: string) => Promise<boolean>;
  logOut: () => void;
  isLogged: boolean;
}

interface AuthContextProps {
  children: ReactElement;
}

export const AuthContext = createContext({} as AuthInterface);

export const AuthProvider = ({ children }: AuthContextProps): ReactElement => {

  //#region Properties

  const [user, setUser] = useState<UserInterface>();
  const [token, setToken] = useState<string>();
  const api = useApi();

  //#endregion

  //#region LifeCycle Events

  useEffect(() => {
    const loggedUser = localStorage.getItem(environment.keys.user);
    const userToken = localStorage.getItem(environment.keys.token);

    if (loggedUser && userToken) {
      setUser(JSON.parse(loggedUser));
      setToken(userToken);
    }
  }, []);

  //#endregion

  //#region Methods

  const signIn = async (email: string, password: string): Promise<boolean> => {
    const data = await api.signIn(email, password);

    if (data.token && data.user) {
      localStorage.setItem(environment.keys.token, data.token);
      localStorage.setItem(environment.keys.user, JSON.stringify(data.token));

      setUser(data.user);
      setToken(data.token);
      return true;
    }

    return false;
  }

  const logOut = (): void => {
    setUser(undefined);
    setToken(undefined);
  }

  //#endregion

  return <AuthContext.Provider value={{ user, signIn, logOut, isLogged: !!token }}>
    { children }
  </AuthContext.Provider>
}

//#endregion

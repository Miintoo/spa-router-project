/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';

export const RouterContext = createContext({
  path: '',
  changePath: () => undefined
});

export default function Router({ children }) {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleOnpopstate = (e) => {
      setPath(e.state.path || '/');
    };

    window.addEventListener('popstate', handleOnpopstate);

    return () => {
      window.addEventListener('popstate', handleOnpopstate);
    };
  }, []);

  const changePath = (path) => {
    setPath(path);

    window.history.pushState('', '', path);
  };

  const contextValue = {
    path,
    changePath
  };

  return <RouterContext.Provider value={contextValue}>{children}</RouterContext.Provider>;
}

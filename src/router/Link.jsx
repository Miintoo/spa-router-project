import { useContext } from 'react';
import { RouterContext } from './Router';

/* eslint-disable react/prop-types */
export default function Link({ to, children }) {
  const { changePath } = useContext(RouterContext);

  const handleClick = (e) => {
    e.preventDefault();

    changePath(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

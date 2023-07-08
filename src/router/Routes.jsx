import { useContext } from 'react';
import { RouterContext } from './Router';
import Root from '../components/Root';
import About from '../components/About';

export default function Routes() {
  const { path } = useContext(RouterContext);
  return (
    <>
      {path === '/' && <Root />}
      {path !== '/' && <About />}
    </>
  );
}

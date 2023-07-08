import { useContext } from 'react';
import { RouterContext } from './Router';

export default function useNavigate() {
  const { path, changePath } = useContext(RouterContext);

  const navigate = (nextPath) => {
    if (nextPath === path) {
      return;
    }

    changePath(nextPath);
  }

  return navigate;
}
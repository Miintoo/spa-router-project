// import Link from '../router/Link';
import useNavigate from './../router/useNavigator';

export default function Root() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/about');
  };

  return (
    <>
      <h2>root</h2>
      {/* <Link to="/about">about</Link> */}
      <button onClick={handleClick}>about</button>
    </>
  );
}

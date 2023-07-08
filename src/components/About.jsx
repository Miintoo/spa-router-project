// import Link from '../router/Link';
import useNavigate from '../router/useNavigator';

export default function About() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <h2>about</h2>
      {/* <Link to="/">go main</Link> */}
      <button onClick={handleClick}>go main</button>
    </>
  );
}

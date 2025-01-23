import styled from 'styled-components';
import { FormInput, Logo } from '../components';
import { useNavigate, useNavigation } from 'react-router-dom';
import { useUserContext } from '../context/userContext';

function Login() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const navigate = useNavigate();

  const { setUserInfo } = useUserContext();

  const user = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password: 'johndoe789',
  };

  const guestLogin = () => {
    return navigate('/');
  };

  const handleUserLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (!email || !password) {
      toast.error('Please provide all the values');
      return;
    }

    if (email !== user.email || password !== user.password) {
      toast.error('Invalid credentials');
      return;
    }

    // set user in context
    setUserInfo(user.name);
    // toast.success(`Welcome ${}`)
    return navigate('/');
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleUserLogin}>
        <Logo />
        <h4>login</h4>
        <FormInput name="email" type="email" />
        <FormInput name="password" type="password" />
        <button type="submit" disabled={isSubmitting} className="btn form-btn ">
          {isSubmitting ? 'submitting...' : 'submit'}
        </button>
        <button type="button" className="btn form-btn" onClick={guestLogin}>
          guest user
        </button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;

  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
    text-align: center;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--clr-primary-5);
  }
  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
    color: var(--clr-grey-3);
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
    width: 100%;
  }
  .member-btn {
    color: var(--clr-primary-5);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
    text-transform: capitalize;
  }
`;

export default Login;

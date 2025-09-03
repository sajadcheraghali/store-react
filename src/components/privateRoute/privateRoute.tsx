
import { useLoginContext } from '../../context/loginContext/loginContext';
import { Navigate, Outlet } from 'react-router-dom';

function privateRoute() {

    const {isLoggedIn} = useLoginContext();

  return (
    <>
    {
      // This component checks if the user is logged in
      // If the user is logged in, it renders the child components (Outlet)
      // If not, it redirects to the home page
      // This is useful for protecting routes that require authentication
      // such as a shopping cart or user profile page
      isLoggedIn ? <Outlet /> : <Navigate to="/login"/>
    }
    </>
  )
}

export default privateRoute
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../MainNavigation/MainNavigation';

function Error() {
  const error = useRouteError();

  let title = 'An error occurred!';
  let message = 'Something went wrong!';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found!';
    message = 'Could not find resource or page.';
  }

  return (
    <>
      <MainNavigation />
      <div style={{textAlign: 'center'}}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </>
  );
}

export default Error;
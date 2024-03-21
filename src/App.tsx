import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthWrapper } from './auth/AuthWrapper';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import ErrorPage from './components/ErrorPage';
import RankingPage from './components/RankingPage';
import PersonalSettingsList from './components/smallComponents/PersonalSettingsList';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <LoginPage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: '/sign-up',
//     element: <RegisterPage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: '/home',
//     element: <HomePage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: '/ranking',
//     element: <RankingPage />,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: '/test',
//     element: <PersonalSettingsList  />,
//     errorElement: <ErrorPage />,
//   },
// ]);

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthWrapper/>
      </BrowserRouter>
      {/* <RouterProvider router={router} /> */}
    </>
  );
}

export default App;

import HomePage from "../HomePage";
import LoginPage from "../LoginPage";
import RankingPage from "../RankingPage";
import RegisterPage from "../RegisterPage";


export const nav = [
  { path: '/',              name: 'Login',        element: LoginPage,       isPrivate: false },
  { path: '/home',          name: 'Home',         element: HomePage,        isPrivate: true  },
  { path: '/register',      name: 'Register',     element: RegisterPage,    isPrivate: true  },
  { path: '/ranking',       name: 'Ranking',      element: RankingPage,     isPrivate: true  }
]
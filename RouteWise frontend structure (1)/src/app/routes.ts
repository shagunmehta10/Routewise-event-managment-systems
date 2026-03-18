import { createBrowserRouter } from 'react-router';
import Dashboard from './pages/Dashboard';
import Events from './pages/Events';
import LiveMap from './pages/LiveMap';
import AuthorityDashboard from './pages/AuthorityDashboard';
import NotFound from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Dashboard,
  },
  {
    path: '/events',
    Component: Events,
  },
  {
    path: '/live-map',
    Component: LiveMap,
  },
  {
    path: '/dashboard',
    Component: AuthorityDashboard,
  },
  {
    path: '*',
    Component: NotFound,
  },
]);

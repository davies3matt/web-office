import Loadable from 'react-loadable';
/** Presentational */
import loading from './Loading';

const AsyncHome = Loadable({
    loader: () => import('../containers/Home'),
    loading
})

const PublicRoutes = [
    {
        title: 'Home',
        path: '/home',
        element: <AsyncHome />,
    }
];

export default PublicRoutes;
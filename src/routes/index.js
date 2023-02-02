//Layouts
import HeaderOnly from '../component/Layout/headerOnly';

import Homes from '../pages/Homes';
import Folowing from '../pages/Folowing';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import Upload from '../pages/Upload';
import Feedback from '../pages/Feedback';

import configRoutes from './configRoutes';

//Public Routes
const publicRoutes = [
    { path: configRoutes.home, component: Homes },
    { path: configRoutes.folowing, component: Folowing },
    { path: configRoutes.profile, component: Profile },
    { path: configRoutes.search, component: Search, layout: null },
    { path: configRoutes.upload, component: Upload, layout: HeaderOnly },
    { path: configRoutes.feedback, component: Feedback, layout: null },
];

export { publicRoutes };

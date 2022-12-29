//Layouts
import HeaderOnly from '../component/Layout/headerOnly';

import Homes from '../pages/Homes';
import Folowing from '../pages/Folowing';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import Upload from '../pages/Upload';
import Feedback from '../pages/Feedback';

//Public Routes
const publicRoutes = [
    { path: '/', component: Homes },
    { path: '/folowing', component: Folowing },
    { path: '/Profile', component: Profile },
    { path: '/search', component: Search, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/feedback', component: Feedback, layout: null },
];

export { publicRoutes };

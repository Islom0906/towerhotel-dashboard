import React from 'react';
import {RoutePermittedRole} from '../../shared/constants/AppEnums';


const Order = React.lazy(() => import('./Order'));
const Contact = React.lazy(() => import('./Contact'));
const ContactPostEdit = React.lazy(() => import('./Contact/ContactPostEdit'));
const Landmark = React.lazy(() => import('./Landmark'));
const LandmarkPostEdit = React.lazy(() => import('./Landmark/LandmarkPostEdit'));
const AboutHeader = React.lazy(() => import('./AboutHeader'));
const AboutHeaderPostEdit = React.lazy(() => import('./AboutHeader/AboutHeaderPostEdit'));
const AboutPage = React.lazy(() => import('./About Page'));
const AboutPagePostEdit = React.lazy(() => import('./About Page/AboutPagePostEdit'));
const AboutIndex = React.lazy(() => import('./About Index'));
const AboutIndexPostEdit = React.lazy(() => import('./About Index/AboutHeaderPostEdit'));
const AboutInfo = React.lazy(() => import('./About Info'));
const AboutInfoPostEdit = React.lazy(() => import('./About Info/AboutInfoPostEdit'));
const Gallery = React.lazy(() => import('./Gallery'));
const GalleryPostEdit = React.lazy(() => import('./Gallery/GalleryPostEdit'));
const Banner = React.lazy(() => import('./Banner'));
const BannerPostEdit = React.lazy(() => import('./Banner/BannerPostEdit'));
const News = React.lazy(() => import('./News'));
const NewsPostEdit = React.lazy(() => import('./News/NewsPostEdit'));
const NewsBanner = React.lazy(() => import('./NewsBanner'));
const NewsBannerPostEdit = React.lazy(() => import('./NewsBanner/NewsBannerPostEdit'));
const RoomsBanner = React.lazy(() => import('./RoomsBanner'));
const RoomsBannerPostEdit = React.lazy(() => import('./RoomsBanner/RoomsBannerPostEdit'));
const Rooms = React.lazy(() => import('./Rooms'));
const RoomsPostEdit = React.lazy(() => import('./Rooms/RoomsPostEdit'));
const Service = React.lazy(() => import('./Service'));
const ServicePostEdit = React.lazy(() => import('./Service/ServicePostEdit'));


export const samplePagesConfigs = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/order',
    element: <Order/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/landmark',
    element: <Landmark/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/landmark/add',
    element: <LandmarkPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/contact',
    element: <Contact/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/contact/add',
    element: <ContactPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/about-header',
    element: <AboutHeader/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/about-header/add',
    element: <AboutHeaderPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/about-page',
    element: <AboutPage/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/about-page/add',
    element: <AboutPagePostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/about-index',
    element: <AboutIndex/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/about-index/add',
    element: <AboutIndexPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/about-info',
    element: <AboutInfo/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/about-info/add',
    element: <AboutInfoPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/gallery',
    element: <Gallery/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/gallery/add',
    element: <GalleryPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/banner',
    element: <Banner/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/banner/add',
    element: <BannerPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/news',
    element: <News/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/news/add',
    element: <NewsPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/news-banner',
    element: <NewsBanner/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/news-banner/add',
    element: <NewsBannerPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/rooms-banner',
    element: <RoomsBanner/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/rooms-banner/add',
    element: <RoomsBannerPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/rooms',
    element: <Rooms/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/rooms/add',
    element: <RoomsPostEdit/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/service',
    element: <Service/>,
  },
  {
    permittedRole: RoutePermittedRole.user,
    path: '/service/add',
    element: <ServicePostEdit/>,
  },
];

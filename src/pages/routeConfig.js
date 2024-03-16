import {TiContacts} from "react-icons/ti";
import {SlBasketLoaded} from "react-icons/sl";
import {FiInfo} from "react-icons/fi";
import {ImNewspaper} from "react-icons/im";
import {MdLocalHotel, MdMiscellaneousServices} from "react-icons/md";
import {FaMapLocationDot} from "react-icons/fa6";
import {BsFillImageFill} from "react-icons/bs";
import {GrGallery} from "react-icons/gr";



const routesConfig = [
    {
        id: 'app',
        title: 'Sample',
        messageId: 'sidebar.sample',
        type: 'group',
        children: [
            {
                id: 'order',
                title: 'order',
                messageId: 'sidebar.sample.order',
                type: 'item',
                icon: <SlBasketLoaded/>,
                path: '/order',
            },
            {
                id: 'About',
                title: 'About',
                messageId: 'sidebar.about',
                icon: <FiInfo/>,
                type: 'collapse',
                children: [
                    {
                        id: 'about-header',
                        title: 'about-header',
                        messageId: 'sidebar.sample.aboutHeader',
                        type: 'item',
                        path: '/about-header',
                    },
                    {
                        id: 'about-page',
                        title: 'about-page',
                        messageId: 'sidebar.sample.aboutPage',
                        type: 'item',
                        path: '/about-page',
                    },
                    {
                        id: 'about-index',
                        title: 'about-index',
                        messageId: 'sidebar.sample.aboutIndex',
                        type: 'item',
                        path: '/about-index',
                    },
                    {
                        id: 'about-info',
                        title: 'about-info',
                        messageId: 'sidebar.sample.aboutInfo',
                        type: 'item',
                        path: '/about-info',
                    },
                ]
            },
            {
                id: 'News',
                title: 'News',
                messageId: 'sidebar.news',
                icon: <ImNewspaper/>,
                type: 'collapse',
                children: [
                    {
                        id: 'news',
                        title: 'news',
                        messageId: 'sidebar.sample.news',
                        type: 'item',
                        path: '/news',
                    },
                    {
                        id: 'news-banner',
                        title: 'news-banner',
                        messageId: 'sidebar.sample.newsBanner',
                        type: 'item',
                        path: '/news-banner',
                    },
                ]
            },
            {
                id: 'Rooms',
                title: 'Rooms',
                messageId: 'sidebar.rooms',
                icon: <MdLocalHotel/>,
                type: 'collapse',
                children: [
                    {
                        id: 'rooms',
                        title: 'rooms',
                        messageId: 'sidebar.sample.rooms',
                        type: 'item',
                        path: '/rooms',
                    },
                    {
                        id: 'rooms-banner',
                        title: 'rooms-banner',
                        messageId: 'sidebar.sample.roomsBanner',
                        type: 'item',
                        path: '/rooms-banner',
                    },
                ]
            },
            {
                id: 'landmark',
                title: 'landmark',
                messageId: 'sidebar.sample.landmark',
                type: 'item',
                icon: <FaMapLocationDot/>,
                path: '/landmark',
            },
            {
                id: 'contact',
                title: 'contact',
                messageId: 'sidebar.sample.contact',
                type: 'item',
                icon: <TiContacts/>,
                path: '/contact',
            },
            {
                id: 'gallery',
                title: 'gallery',
                messageId: 'sidebar.sample.gallery',
                type: 'item',
                icon: <GrGallery/>,
                path: '/gallery',
            },
            {
                id: 'banner',
                title: 'banner',
                messageId: 'sidebar.sample.banner',
                type: 'item',
                icon: <BsFillImageFill/>,
                path: '/banner',
            },

            {
                id: 'service',
                title: 'service',
                messageId: 'sidebar.sample.service',
                type: 'item',
                icon: <MdMiscellaneousServices/>,
                path: '/service',
            },
        ],
    },
];
export default routesConfig;

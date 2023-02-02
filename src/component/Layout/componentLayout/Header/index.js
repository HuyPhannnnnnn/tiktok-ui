import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';

import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import Image from '../../../images';
import Search from '../Search';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { Link } from 'react-router-dom';
import configRoutes from '../../../../routes/configRoutes';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets/images';

import {
    IconMessage,
    IconInbox,
    IconProfile,
    IconCoin,
    IconLive,
    IconSetting,
    IconLanguage,
    Feedbackk,
    IconKeyboard,
    IconLogut,
} from '../../../icons';

//ctr+shift+L:để cop hết các chữ
const cx = classNames.bind(styles);

//Mảng MENU
const MENU_ITEMS = [
    {
        icon: <IconLanguage />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    icon: <IconLanguage />,
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    icon: <IconLanguage />,
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <Feedbackk />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <IconKeyboard />,
        title: 'Keyboard shortcuts',
    },
];

//menu Phần login
const currentUser = true;

//mảng phần user menu
const userMenu = [
    {
        icon: <IconProfile />,
        title: 'View profile',
        to: '/@hoa',
    },
    {
        icon: <IconCoin />,
        title: 'Get Coins',
        to: '/coin',
    },
    {
        icon: <IconLive />,
        title: 'Live Studio',
    },
    {
        icon: <IconSetting />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <IconLogut />,
        title: 'Log out',
        seperate: true,
    },
];

function Header() {
    //haddle(props:menuitem sẽ truyền về chính object của nó)
    const handleMenuchange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //viêt logic muốn làm gì ở đây hoặc chuyển trang
                break;
            default:
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={configRoutes.home} className={cx('logo-link')}>
                        <Image src={images.logo} alt="Tiktok"></Image>
                    </Link>
                </div>

                <Search />

                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button lock to={'/upload'}>
                                <FontAwesomeIcon className={cx('plus')} icon={faPlus} />
                                <span className={cx('upload')}>Upload</span>
                            </Button>

                            <Tippy delay={[0, 200]} content="Messages">
                                <button className={cx('action-btn')}>
                                    <IconMessage />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="inbox">
                                <button className={cx('action-btn')}>
                                    <IconInbox />
                                    <span className={cx('badge')}>1</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button lock to={'/login'}>
                                <FontAwesomeIcon className={cx('plus')} icon={faPlus} />
                                <span className={cx('upload')}>Upload</span>
                            </Button>
                            <Button primarytwo to={'/login'}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onchange={handleMenuchange}>
                        {currentUser ? (
                            <div className={cx('userr-avartar')}>
                                <Image
                                    className={cx('user-avartar')}
                                    src={images.photo}
                                    alt="Daolephuonghoa"
                                    fallback={
                                        //ảnh cutom khi ảnh chính bị lỗi mà ko muốn dùng ảnh lỗi mặc định
                                        'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/a6fc69440ecd6e4e86b8ef977e75c1c0~c5_100x100.jpeg?x-expires=1672560000&x-signature=OBLkVgcV2nZVIp6Ute8vhfPvksE%3D'
                                    }
                                ></Image>
                            </div>
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

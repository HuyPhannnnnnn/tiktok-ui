import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEarthAmericas,
    faEllipsisVertical,
    faGear,
    faInbox,
    faKeyboard,
    faPaperPlane,
    faPlus,
    faRightFromBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import { useEffect, useState } from 'react';
import { Wrraper as PopperWrapper } from '../../../Popper';
import AcountItem from '../../../AcountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';

import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '../../../../assets/images';
import { faViadeo } from '@fortawesome/free-brands-svg-icons';

//ctr+shift+L:để cop hết các chữ
const cx = classNames.bind(styles);

//Mảng MENU
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmericas} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

//menu Phần login
const currentUser = true;

//mảng phần user menu
const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@hoa',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faViadeo} />,
        title: 'Live Studio',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Setting',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faRightFromBracket} />,
        title: 'Log out',
        seperate: true,
    },
];

function Header() {
    //logic result
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 1000);
    }, []);

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
                    <img src={images.logo} alt="Tiktok"></img>
                </div>
                <HeadlessTippy
                    visible={searchResult.length > 0} //mảng tìm kiếm phải lớn > 0 mới chạy
                    interactive="true"
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Acounts</h4>
                                <AcountItem />
                                <AcountItem />
                                <AcountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search acounts and videos" spellCheck={false} />

                        <button className={cx('check')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button text>
                                <FontAwesomeIcon className={cx('plus')} icon={faPlus} />
                                <span className={cx('upload')}>Upload</span>
                            </Button>
                            <Tippy delay={[0, 200]} content="Messages">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faPaperPlane} />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="inbox">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faInbox} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>
                                <FontAwesomeIcon className={cx('plus')} icon={faPlus} />
                                <span className={cx('upload')}>Upload</span>
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onchange={handleMenuchange}>
                        {currentUser ? (
                            <div className={cx('userr-avartar')}>
                                <img className={cx('user-avartar')} src={images.photo} alt="Daolephuonghoa"></img>
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

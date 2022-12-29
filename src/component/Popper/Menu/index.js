import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrraper as PopperWrapper } from '../index';
import MenuItems from './MenuItems';
import Header from './header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items, onchange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]); //tạo ra mảng history trong đó có một phần tử duy nhất gói trong object mảng item
    const current = history[history.length - 1]; //lấy ra phần tử cuối cùng

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParrent = !!item.children;

            return (
                <MenuItems
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParrent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onchange(item); //click vô thẻ chính nó
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            placement="bottom-end"
            offset={[12, 8]}
            delay={[0, 700]}
            interactive="true"
            render={(attrs) => (
                <div className={cx('menu-lists')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        <ul className={cx('menu-items')}>
                            {history.length > 1 && (
                                <Header
                                    title="Language"
                                    onBack={() => {
                                        setHistory((prev) => prev.slice(0, prev.length - 1));
                                    }}
                                />
                            )}
                            {renderItems()}
                        </ul>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                //back khi hover vẫn lại bằng menu đầu
                return setHistory((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;

import classNames from 'classnames/bind';
import Button from '../../Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItems({ data,onClick, }) {
    const classes = cx('menu-item',{
        seperate:data.seperate
    })

    return (
        <li className={classes}>
            <Button leftIcon={data.icon} to={data.to} onClick={onClick} >
                {data.title}
            </Button>
        </li>
    );
}

export default MenuItems;

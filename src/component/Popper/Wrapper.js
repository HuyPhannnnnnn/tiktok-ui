import styles from './Popper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Wrraper({ children, className }) {
    return <div className={cx('wrapprer', className)}>{children}</div>;
}

export default Wrraper;

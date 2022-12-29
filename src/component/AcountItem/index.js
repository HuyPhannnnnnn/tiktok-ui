import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';
import images from '../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AcountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src={images.photo} alt="Hoaa"></img>
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>hoaa.hanassii</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('name')}>Đào Lê Phương Hoa</span>
            </div>
        </div>
    );
}

export default AcountItem;

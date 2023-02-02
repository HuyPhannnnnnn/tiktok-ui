import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AcountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../images';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AcountItem({ data }) {
    return (
        <Link to={`/@/${data.nickname}`} relative="path" className={cx('wrapper')}>
            <div className={cx('set-avatar')}>
                <Image className={cx('avatar')} src={data.avatar} alt={data.full_name}></Image>
            </div>
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>{data.nickname}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('name')}>{data.full_name}</span>
            </div>
        </Link>
    );
}

AcountItem.propTypes = {
    data: PropTypes.object,
};

export default AcountItem;

import images from '../../assets/images';
import { useState } from 'react';
import styles from './images.module.scss';
import classNames from 'classnames';

function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }) {
    const [fallback, setFallback] = useState('');

    //khi ảnh lỗi thì lấy ảnh này
    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            {...props}
            src={fallback || src}
            alt={alt}
            onError={handleError}
        ></img> //prop onError dùng khi ảnh lỗi
    );
}

export default Image;

//nếu bị lỗi foward ref thì hãy sữ dụng hook
// import {forwardRef} from 'react'
//xong export default forwardRef(Image);

// fallback: customFallback = images.noImage:vì fallback trùng prop nên đổi tên và cho bằng với ảnh khi lỗi mặc đinh
//khi có prop fallback từ ngoài truyền vào thì auto nhân ảnh custom còn không truyền thì dùng ảnh lỗi mặc định
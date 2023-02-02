import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrraper as PopperWrapper } from '../../../Popper';

import * as searchService from '../../../../ApiService/searchService';

import AcountItem from '../../../AcountItem/AcountItem';

import HeadlessTippy from '@tippyjs/react/headless';
// import 'tippy.js/dist/tippy.css';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import { useEffect, useState, useRef } from 'react';
import { useDebounce } from '../../../../hooks';

const cx = classNames.bind(styles);

function Search() {
    //logic result
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSerchValue] = useState('');
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false); //chưa loading

    const debounced = useDebounce(searchValue, 500);

    const inputRef = useRef();

    const handleSearchValue = () => {
        setSerchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    //sét ẩn khi focus ra ngoài
    const handleResult = () => {
        setShowResult(false);
    };

    const handleInput = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSerchValue(e.target.value); //KO phải search bắt đầu bằng dấu cách thì được gõ
        }
    };

    //mục dùng để call Api
    useEffect(() => {
        //giải quyết khi gửi lên chũi rỗng
        if (!debounced.trim()) {
            setSearchResult([]); //nếu không có gì thì xóa thành mảng rỗng
            return;
        }

        //call api
        const fetchApi = async () => {
            setLoading(true); //trước khi gọi api sét nó là true

            const result = await searchService.search(debounced);
            setSearchResult(result);

            setLoading(false);
        };

        fetchApi();
    }, [debounced]);

    return (
        //Using a wrapper <div> or <span> tag around the reference element solves this by
        //creating a new parentNode context. (lý do phải bọc div)
        <div>
            <HeadlessTippy
                // trigger="click"
                visible={showResult && searchResult.length > 0} //mảng tìm kiếm phải lớn > 0 mới chạy
                interactive="true"
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Acounts</h4>
                            {searchResult.map((cur) => {
                                return <AcountItem key={cur.id} data={cur} />;
                            })}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search acounts and videos"
                        spellCheck={false}
                        onChange={handleInput}
                        //set khi focus vào nó hiện ra lại thanh tìm kiếm
                        onFocus={() => {
                            setShowResult(true);
                        }}
                    />

                    {!!searchValue && !loading && (
                        <button className={cx('check')} onClick={handleSearchValue}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;

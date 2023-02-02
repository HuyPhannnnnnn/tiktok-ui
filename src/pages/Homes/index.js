import { useState } from 'react';
import Button from '../../component/Button';

function Homes() {
    const [show, setShow] = useState(false);
    return (
        <>
            <Button text onClick={() => setShow(!show)}>
                Khóa học
            </Button>
            {show && (
                <ul>
                    <li>
                        <Button text>Javacript</Button>
                    </li>
                    <li>
                        <Button text>php</Button>
                    </li>
                    <li>
                        <Button text>Ruby</Button>
                    </li>
                </ul>
            )}
        </>
    );
}

export default Homes;

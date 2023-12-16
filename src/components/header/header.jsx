import React from 'react';

const header = () => {
    return (
        <div className={'header'}>
            <button>Закрыть</button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
}

export default header;
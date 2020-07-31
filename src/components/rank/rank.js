import React from 'react';


const Rank = ( {name, entries} ) => {
    return (
        <div>
            <div className='white f3'>
                {`${name}, you have submitted...`}
            </div>
            <div className='white f1'>
                {`${entries} pictures!`}
            </div>
        </div>
    );
}

export default Rank;
import React from 'react';

const Sresult= (props) => {
    const img = `https://source.unsplash.com/600x300/?${props.name}`;
    return(
        <>
        <div>
        <img src={img} alt="ting"/>
        </div>
        </>
    );
};
export default Sresult;
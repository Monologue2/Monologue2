import React from 'react';

export const Title = ({title}) => {
    return (      
        <>          
            <div className="title text-head2">{title}</div>
            <div className="relative w-[1080px] h-[1.8px] bg-lightgray line-margin" />
        </>
    )
}

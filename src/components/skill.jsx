import React from 'react';
import {Item} from './item.jsx'

export const Skill = ({category,...skill}) => {
    return ( 
    <>
        <div className="skill">
            <div className="category" style={{ fontFamily: 'Pretendard ExtraBold' }}>{category}</div>
            {Object.keys(skill).map((key) => (
                <Item content={skill[key].content} icon={skill[key].icon}/>
            ))}
        </div>
    </>
    )
}
import React from 'react';
import {Item} from './item.jsx'

export const Skill = ({category, icon,...skill}) => {
    return ( 
    <>
        <div className="skill" style={{}}>
            <div className="category" style={{ fontFamily: 'Pretendard ExtraBold' }}>{category}</div>
            {Object.keys(skill).map((key) => (
                <Item content={skill[key]} icon={icon}/>
            ))}
        </div>
    </>
    )
}
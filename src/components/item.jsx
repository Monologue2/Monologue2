import React from 'react';


export const LinkedItem = ({icon, content, link}) => {
    return (
      <p className="relative self-stretch mt-2">
          {link ?
              <a href={link} rel="noopener noreferrer" target="_blank">
                  <Item icon={icon} content={content}/>
              </a> : <Item icon={icon} content={content}/>
          }
      </p>
    )
  }

export const Item = ({icon, content}) => {
    return (
        <div className="item relative flex flex-row justify-start items-center"> 
            {icon && <img className="w-[18px] h-[18px] opacity-80 mr-[5px] absolute top-0.5 left-0.5" alt="" src={icon}/>}
            <span className="pl-[23.5px]" style={{ fontFamily: 'Pretendard Regular' }} > {content} </span>
        </div>
    )
}
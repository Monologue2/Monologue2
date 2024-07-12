import React from 'react';

export const Project = ({project}) => {
    return ( 
        <>
            <div className="project-container padding">
                <div className="project-intro preten" style={{ fontFamily: 'Pretendard'}}>
                    <div 
                        className="project"
                        dangerouslySetInnerHTML={{ __html: project.name.replace(/\n/g, '<br />') }}
                    />
                    <div className="timeframe font">{project.timeframe}</div>
                    {/* <div>{project.timefame}</div> */}
                </div>
                <div className="project-content" >
                    <div>
                        <div>
                            <div className="project-subtitle" style={{ fontFamily: 'Pretendard SemiBold'}} >개요</div>
                            <Content {...project.overview} />
                        </div>
                    </div>
                    <div className="mt-5"> 
                        <div>
                            <div className="project-subtitle" style={{ fontFamily: 'Pretendard SemiBold'}}>역할</div>
                            <Content {...project.role} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Experience = ({project}) => {
    return ( 
        <>
            <div className="project-container padding">
                <div className="project-intro preten" style={{ fontFamily: 'Pretendard'}}>
                    <div 
                        className="project"
                        dangerouslySetInnerHTML={{ __html: project.name.replace(/\n/g, '<br />') }}
                    />
                    <div className="timeframe font">{project.timeframe}</div>
                </div>
                <div className="project-content mt-1" >
                    <div>
                        <div>
                            <div className="project-subtitle" style={{ fontFamily: 'Pretendard SemiBold'}} >개요</div>
                            <Content {...project.overview} />
                        </div>
                    </div>
                    <div className="mt-5"> 
                        <div>
                            <div className="project-subtitle" style={{ fontFamily: 'Pretendard SemiBold'}}>역할</div>
                            <Experience_Content {...project.role} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Certificates = ({project}) => {
    return ( 
        <>
            <div className="project-container padding">
                <div className="project-intro preten" style={{ fontFamily: 'Pretendard'}}>
                    <div 
                        className="project"
                        dangerouslySetInnerHTML={{ __html: project.name.replace(/\n/g, '<br />') }}
                    />
                    <div className="timeframe font">{project.timeframe}</div>
                </div>
                <div className="project-content mt-1" >
                    <div>
                        <div>
                            <div className="project-subtitle" style={{ fontFamily: 'Pretendard SemiBold'}} >개요</div>
                            <Content {...project.overview} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Content = ( {...content} ) => {
    return (
        <>
            {Object.keys(content).map((key) => (
                <div 
                    className="ml-3 mb-0.5 project-subcontent" 
                    style={{ fontFamily: 'Pretendard'}} 
                    dangerouslySetInnerHTML={{ __html: content[key].replace(/\n/g, '<br />') }} />
            ))}
        </>
    )
}

export const Experience_Content = ( {...content} ) => {
    return (
        <>
            {Object.keys(content).map((key) => (
                <>
                <div 
                    className="ml-3  project-subcontent" 
                    style={{ fontFamily: 'Pretendard SemiBold'}} 
                    dangerouslySetInnerHTML={{ __html: content[key].title}} />
                <li className="ml-3 mb-2 project-subcontent"style={{ fontFamily: 'Pretendard'}} dangerouslySetInnerHTML={{ __html: content[key].content}}/>
                </>
            ))}
        </>
    )
}
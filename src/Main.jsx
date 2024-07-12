import React from 'react';
import { Title } from './components/title'
import { Skill } from './components/skill'
import { Project, Experience, Certificates } from './components/project';
import {ThinLine} from './components/thinLine'
import { LinkedItem } from './components/item'
import { Programming_Language, Web_Dev, Database, Containerize, Monitoring, CI_CD, Cloud_System_Administration, Productive_Tools } from './contents/categories';
import { Cloud_For_Edu, Dehazing, Fire_Detection_MQ, KMS} from './contents/projects-contents';
import { HomeLab, Beharbor, Docker } from './contents/experiences-contents';
import { HPE_Linux, HPE_Docker_Kube } from './contents/certificates';


function Main() {
    return (
        <main className="min-w-[1240px] w-full">
            <img className="header h-[120px] min-w-[1240px] w-full object-cover " alt="" src="/img/header.png" />
            <div className="main-container relative inline-flex flex-col items-start mx-auto my-0">
                {/* Profiles */}
                <div className="profile-container padding">
                    <div className="profile-image-contect">
                        <img className="w-[240px] h-[300px] object-cover" alt="Profile" src="/img/profile.png" />
                        {/* <div className="contect">Contects</div> */}
                        <LinkedItem icon="/img/icon/linkedin-black.png" content="승언-유" link="https://www.linkedin.com/in/%EC%8A%B9%EC%96%B8-%EC%9C%A0-84b560222/"/>
                        <LinkedItem icon="/img/icon/github-black.png" content="Monologue2" link="https://github.com/Monologue2"/>
                        <LinkedItem icon="/img/icon/email-black.png" content="seyoumoon@gmail.com" link="mailto:seyoumoon@gmail.com"/>
                    </div>
                    <div className="profile-introduce">
                        <div className="profile-text text-head3">DevOps 엔지니어 유승언입니다.</div>
                        <div className="profile-text" >연구실(AI Digital Twin Lab) 재직 중 진행한 국가 연구 프로젝트에서<br/>개발 외의 프로비저닝 시간을 줄이기 위해 Docker를 배우게 된 걸 계기로 DevOps의 세계에 발을 들였습니다.<br/>빌드 및 배포 자동화, 테스트 자동화를 공부하고 국가 연구 프로젝트에 적용하여 개발 시간을 크게 단축했습니다. </div>
                        <div className="profile-text" >이후 DevOps 에 대한 안목을 기르기 위해 컨테이너 오케스트레이션, 클라우드 분야에 관심을 가지고 <br/>프로젝트 배포를 위해 CPU Intance 6기와 AWS EC2 2기 규모의 홈 랩을 구축하여<br/>Grafana, Prometheus, Jenkins, Git Action, K3S와 Docker를 이용하여 관리하고 있습니다.<br/></div>
                        <div className="profile-text" >저는 Docker, Kubernetes와 CI/CD 툴을 사용한 빌드, 배포, 테스트에 소요되는 시간을 단축하는데 숙련된 엔지니어입니다.<br/>현재까지도 개인 역량을 성장시키기 위해 공부를 멈추지 않고 있습니다. 감사합니다. </div>
                    </div>
                </div>

                {/* Skill */}
                <Title title="Skill"></Title>
                <div className="skill-container">
                    <Skill category="Programming Language" {...Programming_Language}/>
                    <Skill category="Web & API Development"{...Web_Dev}/>
                    <Skill category="Database"{...Database}/>
                    <Skill category="Containerize" {...Containerize}/>
                    <Skill category="Monitoring" {...Monitoring}/>
                    <Skill category="CI/CD" {...CI_CD}/>
                    <Skill category="Cloud & System Administration" {...Cloud_System_Administration}/>
                    <Skill category="Productive_Tools" {...Productive_Tools}/>
                </div>

                {/* Projects */}
                <Title title="Projects"></Title>
                <Project project={Cloud_For_Edu} />
                <ThinLine />
                <Project project={Dehazing} />
                <ThinLine />
                <Project project={Fire_Detection_MQ} />
                <ThinLine />
                <Project project={KMS} />
                
                {/* Experiences */}
                <Title title="Experiences"></Title>
                <Experience project={HomeLab} />
                <ThinLine />
                <Experience project={Beharbor} />
                <ThinLine />
                <Project project={Docker} />

                {/* Certificates */}
                <Title title="Certificates"></Title>
                <Certificates project={HPE_Linux} />
                <ThinLine />
                <Certificates project={HPE_Docker_Kube} />
            </div>
            <div className="relative info-block">
                <div class="absolute right-[250px] mt-8 inline-flex gap-[16px] flex-col items-start">
                    <div class="bottom-text relative w-[134px] h-[52px] mt-[-1.00px] text-white" style={{ fontFamily: 'Pretendard'}}>
                        유승언 <br />
                        seyoumoon@gmail.com <br />
                        v2024.07
                    </div>
                </div>
            </div>
        </main>
    );
}


export default Main
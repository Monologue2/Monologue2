// Experiences
export class Project {
    constructor(name, timeframe, overview, role) {
        this.name = name
        this.timeframe = timeframe
        this.overview = overview
        this.role = role
    }
}

export const HomeLab = new Project(
    '개인 서버, 도메인 운영',
    '2023.01 ~ Current',
    {
        Content1 : "프로젝트 배포를 위한 개인 서버를 구축하고 연구 및 배포에 활용 중입니다.",
    },
    {
        1 : {
                title : "<a href=\"https://kafka.shogle.net/auth\" title=\"Kafka Cluster & Kafka UI\">Kafka Cluster & Kafka UI</a>",
                content :"기상 정보 데이터 수집에 사용하고 있습니다."
            },
        2 : {
                title : "<a href=\"https://grafana.shogle.net\" title=\"Kafka Cluster & Kafka UI\">Grafana & Prometheus 모니터링</a>",
                content : "개인 서버의 모니터링에 사용하고 있습니다."
            },
        3 : {
                title : "OpenVPN",
                content : "함께 작업할 사용자들에게 인증 파일을 전달하는 방식으로 접속 권한을 부여하고 있습니다.<br />이를 통해 사설망에 접근한 것과 동일한 효과를 낼 수 있습니다."
            },
        4 : {
                title : "Jenkins",
                content : "개인 프로젝트의 CI/CD 용도로 사용하고 있습니다."
            },
        5 : {
                title : "Nginx & Nginx Proxy Manager & CloudFlare",
                content : "서버 호스팅, 웹 서버 및 리버스 프록싱을 맡고 있습니다."
            },
        6 : {
                title : "딥러닝 모델 학습 환경",
                content : "소규모 딥러닝 모델 학습 및 연구 용도로 NVIDIA GeForce GTX 1080 Ti 11GB 2기와 서버 프로비저닝을 했습니다."
            },
        7 : {
                title : "원격 개발 환경",
                content : "기기에 상관없이 동일한 환경에서 작업을 이어나갈 수 있도록 리모트 환경을 구축했습니다."
            },
    },
)


export const Beharbor = new Project(
    'Beharbor 서버관리팀 팀장',
    '2023.02 ~ 2024.08',
    {
        Content1 : "동아대학교 컴퓨터공학과 서버관리팀 Beharbor 팀장을 맡았습니다.",
        Content2 : "Beharbor는 50명 규모의 컴퓨터AI공학부 학생으로 이루어진 단체이며, 주요 업무는 서버 관리 및 수업 실습 지원입니다."
    },
    {
        1 : {
                title : "학부생 멘토링 및 팀원 관리",
                content :"50명 가량의 팀원을 멘토링하고 기술 자문을 맡았습니다."
            },
        2 : {
                title : "사이니지 서버 관리",
                content : "동아대학교 컴퓨터공학과 학과사무실과 연구실에서 제공하는 컨텐츠를 관리하고 게시하는 사이니지 시스템을 운영했습니다."
            },
        3 : {
                title : "서버 유지보수 및 모니터링",
                content : "AI 관련 인프라인 V100, A100 연산가속기 서버 및 CPU Intance Server 4기를 관리하며<br /> 연구실 및 학생들에게 요청을 받아 컨테이너 형 IaaS를 제공했습니다."
            },
        4 : {
                title : "DB, Service 빌드, 테스트, 프로덕트 용 서버 IaaS 제공 및 프로비저닝",
                content : "해커톤 및 교내 대회에 참여한 학생들에게 원활한 협업을 위해 DB, MQ나 개발 환경을 제공했습니다."
            },
    },
)

export const Docker = new Project(
    '학부생 대상 Docker 강의 및 실습',
    '2023.06 ~ 2023.07',
    {
        Content1 : "동아대학교 학부생 26명 대상으로 Docker 강의 및 실습을 제공했습니다.",
    },
    {
        1 : "Docker 기초, 심화 개념 강의록 작성",
        2 : "실습용 원격 서버 프로비저닝",
        3 : "실습 진행에 참여한 26명 전원이 23.09에 진행한 교내 개발 컨퍼런스에서 각자의 프로젝트에 Docker를 적용",
    },
)

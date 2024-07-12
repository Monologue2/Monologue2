class Project {
    constructor(name, timeframe, overview, role) {
        this.name = name
        this.timeframe = timeframe
        this.overview = overview
        this.role = role
    }
}


export const Cloud_For_Edu = new Project(
    '교육용 클라우드<br />개발 환경 기획 및 배포',
    '2023.03 ~ 2024.01',
    {
        Content1 : "클라우드 형태로 서버, 스토리지, 네트워크를 개인 또는 팀에게 제공해주는 IaaS 형태의 서비스입니다.",
        Content2 : "수업 중 학생들의  프로비저닝 시간을 단축하고 학생들의 학습 시간을 늘릴 수 있었습니다."
    },
    {
        1 : "수업 별 개발 환경 기획 분리 업무를 맡아 여러 수업에서 하나의 실습 서버에 공유하던 개발, 테스트 환경을<br />Docker 이미지로 구현하여 라이브러리 버전 충돌 문제를 해결했습니다.",
        2 : "사용자 환경 분리 및 배포 업무를 맡아 다중 사용자 환경으로 운영되던 Linux 실습 서버를<br /> 사용자 단위로 컨테이너 환경을 배포하게 변경하여 실습 오류 발생 시 환경 초기화 시간을 1시간에서 1분으로 단축했습니다."
    }
)

export const Dehazing = new Project(
    '해상 안개 영상 디헤이징 연구<br />테스트 프로세스 및 배포 개선',
    '2023.01 ~ 2023.12',
    {
        Content1 : "안개로 인해 색상 품질이 손상된 영상의 안개를 제거하여 영상의 품질을 향상 하는 전처리 시스템입니다.",
        Content2 : "해양수산부 주관 2023년도 해양 디지털 항로 표지 정보 협력 시스템 개발 연구의 세부 과제입니다."
    },
    {
        1 : "시스템의 컨테이너라이징을 맡아 로컬에서 실행되던 비전 트랜스포머 기반 안개 제거 모델의 실행 환경을<br />컨테이너 환경으로 패키징하여 2시간 이상 걸리던 모델 빌드 및 마이그레이션 시간을 10분으로 단축했습니다.",
        2 : "자동화 업무를 맡아 디헤이징 모델의 신규 데이터 추가, 모델 수정 업무시 수동으로 진행하던 빌드 및 테스트를 자동화하고<br />기존 결과와 현재 결과를 비교할 수 있게 변경함으로서 빌드 및 테스트에 소요되는 시간을 단축했습니다."
    }
)

export const Fire_Detection_MQ = new Project(
    '화재 감지 시스템<br />메세지 처리 개선',
    '2023.01 ~ 2023.04',
    {
        Content1 : "딥러닝 기반 화재 감지 프로그램을 개발하여 영상을 통해 화재를 자동 식별하고,<br />디지털 트윈 플랫폼에서 화재가 발생한 위치와 수, 크기 정보를 소방관들이 우선 확인 할 수 있는 시스템입니다.",
        Content2 : "2023년도 정보통신기획평가원 주관<br />디지털 트윈 기반 스마트 시티 랩 실증 단지 조성 테스트 베드 플랫폼 개발 연구 세부 과제입니다."
    },
    {
        1 : "Kafka 서버 클러스터링 업무를 맡아 단일 카프카 인스턴스로 운영하던 Kakfa 서버를<br />3개 인스턴스의 Kafka 클러스터를 구축하여 대체했습니다.",
        2 : "Kafka 서버 유지 보수 및 Kafka Producer, Kafka Consumer 개발 업무를 맡아<br />n 대의 카메라가 연결된 Nvidia Jetson이 보내는 처리 결과 메세지를 처리하는 시스템을 구축했습니다.<br />메세지는 NoSQL MongoDB와 NVR 서버에 전송되어 화재 감지 확인을 위해 사용했습니다."
    }
)

export const KMS = new Project(
    'KMS 굴뚝 원격 감시체계<br />데이터 파이프라인 구축',
    '2023.03 ~ 2024.01',
    {
        Content1 : "굴뚝 원격 감시체계 관제 센터에서 배치 방식으로 처리 중인 데이터를 실시간 모니터링 및 분석을 위해<br />스트리밍 방식으로 전환하는 프로젝트입니다.",
        Content2 : "2022년 동아대학교 컴퓨터공학과 DevDay 출품작입니다."
    },
    {
        1 : "스트리밍 데이터 파이프라인 구축 업무를 맡아 Docker와 Docker-compose를 사용하여<br />Kafka Producer, Kafka Consumer, Mongo DB Cluster를 구축했습니다.",
        2 : "Flink, Kafka-MongoDB Connecter 를 사용하여 스트리밍 데이터를 처리하고 결과를 NoSQL 문서 형태로 저장했습니다."
    }
)



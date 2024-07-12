export class Project {
    constructor(name, timeframe, overview, role) {
        this.name = name
        this.timeframe = timeframe
        this.overview = overview
    }
}

export const HPE_Linux = new Project(
    'HPE Enterprise<br />Linux Fundamentals',
    '2024.01.08 ~ 2024.01.19(70 Hours)',
    {
        Content1 : "Hewlett Packard Enterprise 에서 진행하는 Linux Administration 교육 과정입니다.",
    },
)

export const HPE_Docker_Kube = new Project(
    'HPE Docker Container<br />이해와 활용<br />Kubernetes<br />핵심개념 및 운영 실무',
    '2024.01.08 ~ 2024.01.19(70 Hours)',
    {
        Content1 : "Hewlett Packard Enterprise 에서 진행하는 Cloud Infra 교육 과정입니다.<br />수료 완료 후 우수 교육생으로 선발되었습니다.",
    },
)

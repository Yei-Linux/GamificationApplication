interface RoadMap {
    themeId: string;
    studyMethodId: string;
    order: number;
}

export class ExamTransport {
    constructor(
      public userEmail: string,
      public roadMap: RoadMap[]
    ) {}
}
export interface TutorResponse {
    fullName: string;
    lastName: string;
    surName: string;
    identifie: string;
  }

  export interface GetCoursesByStudentResponse {
    courseId: string;
    name: string;
    semester: any;
    tutor: TutorResponse;
    langugageProgrammingId: string;
  }

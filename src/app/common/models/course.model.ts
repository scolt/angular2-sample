export interface CourseEntity {
  id: string;
  title: string;
  date?: Date;
  duration: number;
  description: string;
  topRated: boolean;
}

export interface CourseModel {
  totalPages: number;
  courses: CourseEntity[];
}

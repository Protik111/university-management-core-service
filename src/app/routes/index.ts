import express from 'express';
import { academicDepartmentRoutes } from '../moduels/academicDepartment/academicDepartment.routes';
import { academicFacultyRoutes } from '../moduels/academicFaculty/academicFaculty.routes';
import { AcademicSemeterRoutes } from '../moduels/academicSemester/academicSemester.routes';
import { buildingRoutes } from '../moduels/building/building.routes';
import { courseRoutes } from '../moduels/course/course.routes';
import { facultyRoutes } from '../moduels/faculty/faculty.routes';
import { offeredCourseRoutes } from '../moduels/offeredCourse/offeredCourse.routes';
import { offeredCourseClassScheduleRoutes } from '../moduels/offeredCourseClassSchedule/offeredCourseClass.routes';
import { offeredCourseSectionRoutes } from '../moduels/offeredCourseSection/offeredCourseSection.routes';
import { roomRoutes } from '../moduels/room/room.routes';
import { semesterRegistrationRoutes } from '../moduels/semesterRegistration/semesterRegistration.routes';
import { studentRoutes } from '../moduels/student/student.routes';
import { studentEnrolledCourseMarkRoutes } from '../moduels/studentEnrolledCourseMark/studentEnrolledCourseMark.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/academic-semesters',
    route: AcademicSemeterRoutes,
  },
  {
    path: '/academic-faculties',
    route: academicFacultyRoutes,
  },
  {
    path: '/academic-departments',
    route: academicDepartmentRoutes,
  },
  {
    path: '/faculties',
    route: facultyRoutes,
  },
  {
    path: '/students',
    route: studentRoutes,
  },
  {
    path: '/buildings',
    route: buildingRoutes,
  },
  {
    path: '/rooms',
    route: roomRoutes,
  },
  {
    path: '/courses',
    route: courseRoutes,
  },
  {
    path: '/semester-registration',
    route: semesterRegistrationRoutes,
  },
  {
    path: '/offered-courses',
    route: offeredCourseRoutes,
  },
  {
    path: '/offered-course-sections',
    route: offeredCourseSectionRoutes,
  },
  {
    path: '/offered-course-class-schedules',
    route: offeredCourseClassScheduleRoutes,
  },
  {
    path: '/student-enrolled-course-marks',
    route: studentEnrolledCourseMarkRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;

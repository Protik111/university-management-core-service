import express from 'express';
import { academicDepartmentRoutes } from '../moduels/academicDepartment/academicDepartment.routes';
import { academicFacultyRoutes } from '../moduels/academicFaculty/academicFaculty.routes';
import { AcademicSemesterRoutes } from '../moduels/academicSemester/academicSemester.routes';
import { buildingRoutes } from '../moduels/building/building.routes';
import { courseRoutes } from '../moduels/course/course.routes';
import { facultyRoutes } from '../moduels/faculty/faculty.routes';
import { roomRoutes } from '../moduels/room/room.routes';
import { studentRoutes } from '../moduels/student/student.routes';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
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
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;

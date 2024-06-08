import initFacultyEvents from '../moduels/faculty/faculty.events';
import initStudentEvents from '../moduels/student/student.events';

const subscribeToEvents = () => {
  initStudentEvents();
  initFacultyEvents();
};

export default subscribeToEvents;

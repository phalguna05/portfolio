import ChitFund from "./chitFund.png";
import School from "./school.png";
const projects = [
  {
    src: School,
    title: "School Management",
    description:
      "Conceptualized and developed an application for comprehensive student and faculty record management, encompassing functionalities such as attendance tracking and schedule management.Implemented Redux middleware for adept state management, effectively minimizing backend API calls by 30% and enhancing overall system performance.",
  },
  {
    src: ChitFund,
    title: "Finance Management",
    description:
      "Harnessing modern web frameworks(MERN stack), engineered a robust system enabling the creation of groups, transaction recording, and automated due reminders, increasing human efficiency by at least 40%.Architected a MongoDB database and leveraged NodeJs to craft REST APIs, optimizing data storage and transfer mechanisms resulting in a reduction of 15% latency and seamless communication.",
  },
  {
    src: School,
    title: "Real-time Chat",
    description:
      " Conceived and executed a real-time chat application utilizing WebRTC and SocketIO to enable seamless video calling for up to 10 users and signaling capabilities.Executed the integration of key functionalities including JWT-based user authentication and friend invitation system, enhancing the security and social interaction aspects of the platform.Implemented token-based authorization to fortify APIs, improving authentication success rates by 98% and ensuring controlled access to sensitive functionalities.",
  },
];

export { projects };

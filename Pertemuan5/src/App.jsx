import GreetMassage1 from "./GreetMassage1";
import ScheduleComponent from "./ScheduleComponent";

const lectureSchedule = ["Web Programming", "Database", "Data Structure", "Digital Business"];
const extracurricularSchedule = [];

function App() {
  return  <>
  <GreetMassage1 nama="adli"/>
  <h2>Lecture Schedule</h2>
      {lectureSchedule.length === 0 ? (
        <p>Lecture schedule is not available</p>
      ) : (
        <div style={{ display: "flex", gap: "12px" }}>
          {lectureSchedule.map((title, index) => (
            <ScheduleComponent key={index} title={title} />
          ))}
        </div>
      )}
      <h2>Extracurricular Schedule</h2>
      {extracurricularSchedule.length === 0 ? (
        <p>Extracurricular schedule is not available</p>
      ) : (
        <div style={{ display: "flex", gap: "12px" }}>
          {extracurricularSchedule.map((title, index) => (
            <ScheduleComponent key={index} title={title} />
          ))}
        </div>
      )}
  </>
}

export default App
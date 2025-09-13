import CourseGoal from "./CourseGoal";
import { type CourseGoal as CGoal } from "../App";
import InfoBox from "./InfoBox";

type CourseGoalListProps = {
  goals: CGoal[];
  onDelete: (id: string) => void;
};
const CourseGoalList = ({ goals, onDelete }: CourseGoalListProps) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some
      </InfoBox>
    );
  }

  let war;

  return (
    <>
      {goals.length >= 4 && (
        <InfoBox mode="warning">
          You're collecting a lot of goals. Don't put too much on your plate !
        </InfoBox>
      )}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} onDelete={onDelete} id={goal.id}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;

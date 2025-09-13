import { type PropsWithChildren, type ReactNode } from "react";

// type CourseGoalProps = {
//   title: string;
//   //   description: string;
//   children: ReactNode;
// };

type CourseGoalProps = PropsWithChildren<{
  title: string;
  id: string;
  onDelete: (id: string) => void;
}>;
const CourseGoal = ({ title, onDelete, id, children }: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
      {/* <button>Edit</button> */}
    </article>
  );
};

export default CourseGoal;

import { type PropsWithChildren, type ReactNode } from "react";

// type CourseGoalProps = {
//   title: string;
//   //   description: string;
//   children: ReactNode;
// };

type CourseGoalProps = PropsWithChildren<{ title: string }>;

const CourseGoal = ({ title, children }: CourseGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
      <button>Edit</button>
    </article>
  );
};

export default CourseGoal;

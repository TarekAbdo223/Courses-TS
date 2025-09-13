import { useRef, type FormEvent } from "react";

type NewGoalProps = {
  onAddGoal: (goal: string, summary: string) => void;
};

const NewGoal = ({ onAddGoal }: NewGoalProps) => {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    // added the htmlformelement just to let typescript know that the e is related to our form
    e.preventDefault();

    //   new FormData(e.currentTarget);

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    e.currentTarget.reset();
    goal.current?.focus();
    onAddGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="goal">short summary</label>
        <input type="text" id="summary" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;

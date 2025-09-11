import { type FormEvent } from "react";

function handleSubmit(e: FormEvent) {
  e.preventDefault();
}

const NewGoal = () => {
  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" />
      </p>
      <p>
        <label htmlFor="goal">short summary</label>
        <input type="text" id="summary" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;

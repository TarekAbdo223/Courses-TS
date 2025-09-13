import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  title: string;
  description: string;
  id: string;
};

// Function to generate a unique random ID
function generateUniqueId(): string {
  // Using timestamp + random string for better uniqueness
  const timestamp = Date.now().toString(36);
  const randomString = Math.random().toString(36).substring(2, 15);
  return `${timestamp}-${randomString}`;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: generateUniqueId(),
        // title: "Learn React + TS",
        // description: "Learn it in depth!",
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: string) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  function handleEditGoal(
    id: string,
    newTitle: string,
    newDescription: string
  ) {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === id
          ? { ...goal, title: newTitle, description: newDescription }
          : goal
      )
    );
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList
        goals={goals}
        onDelete={handleDeleteGoal}
        onEdit={handleEditGoal}
      />
    </main>
  );
}

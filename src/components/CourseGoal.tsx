import { useState, type PropsWithChildren, type ReactNode } from "react";

// type CourseGoalProps = {
//   title: string;
//   //   description: string;
//   children: ReactNode;
// };

type CourseGoalProps = PropsWithChildren<{
  title: string;
  id: string;
  onDelete: (id: string) => void;
  onEdit: (id: string, newTitle: string, newDescription: string) => void;
}>;
const CourseGoal = ({
  title,
  onDelete,
  id,
  children,
  onEdit,
}: CourseGoalProps) => {
  const getTextFromChildren = (children: ReactNode): string => {
    if (typeof children === "string") return children;
    if (typeof children === "number") return String(children);
    if (children && typeof children === "object" && "props" in children) {
      return getTextFromChildren(children.props.children);
    }
    return "";
  };

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedDescription, setEditedDescription] = useState(
    getTextFromChildren(children)
  );

  const handleSave = () => {
    onEdit(id, editedTitle, String(editedDescription));
    setIsEditing(false);
  };
  const handleCancel = () => {
    setEditedTitle(title);
    setEditedDescription(typeof children === "string" ? children : "");
    setIsEditing(false);
  };

  return (
    <article>
      <div>
        {isEditing ? (
          <>
            <input
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <h2>{title}</h2>
            {children}
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </>
        )}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoal;

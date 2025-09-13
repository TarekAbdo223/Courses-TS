import { type PropsWithChildren } from "react";

type InfoBoxProps = PropsWithChildren<{
  mode: "hint" | "warning";
  severity?: "low" | "medium" | "high";
}>;

const InfoBox = ({ children, mode, severity }: InfoBoxProps) => {
  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;

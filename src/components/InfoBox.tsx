import { type PropsWithChildren } from "react";

type HintProps = {
  mode: "hint";
};

type WarningProps = {
  mode: "warning";
  severity: "low" | "medium" | "high";
};

type InfoBoxProps = PropsWithChildren<HintProps | WarningProps>;

const InfoBox = (props: InfoBoxProps) => {
  const { children, mode } = props;

  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  const { severity } = props;

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
};

export default InfoBox;

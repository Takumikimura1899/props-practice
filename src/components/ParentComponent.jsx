import { ChildComponent } from "./ChidComponent";
export const ParentComponent = (props) => {
  console.log("parent" + props.theme);
  return (
    <div>
      <h1>親コンポーネント</h1>
      <ChildComponent theme={props.theme} />
      <ChildComponent theme={props.theme} />
      <p>jjjjjj</p>
    </div>
  );
};

import { RootComponent } from "./RootComponent";
import { ParentComponent } from "./ParentComponent";
import { ChildComponent } from "./ChidComponent";
export const App = () => {
  return (
    <>
      <p>propsのバケツリレー</p>
      <div style={{ backgroundColor: "#786789" }}>
        <RootComponent />
      </div>
      <div style={{ backgroundColor: "#379865" }}>
        <ParentComponent />
      </div>
      <div style={{ backgroundColor: "#986576" }}>
        <ChildComponent />
      </div>
    </>
  );
};

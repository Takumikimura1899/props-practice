import { ParentComponent } from "./ParentComponent";

export const RootComponent = () => {
  const theme = "hoge";
  console.log({ theme });
  return (
    <div>
      <h1>ルートコンポーネント</h1>
      <ParentComponent theme={theme} />
    </div>
  );
};

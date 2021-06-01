export const ChildComponent = (props) => {
  console.log("Child" + JSON.stringify(props));
  return (
    <div>
      <h1>子コンポーネント</h1>
      <p>{props.theme}</p>
      <p>{props.theme}</p>
      <p>aaaaa</p>
    </div>
  );
};

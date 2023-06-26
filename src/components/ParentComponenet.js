import { ChildComponenet } from "./ChildComponenet";

export const ParentComponenet = () => {
  const greetParent = (childName) => {
    alert(`Hello Parent! ${childName}`);
  };
  return <ChildComponenet greetHandler={greetParent} />;
};

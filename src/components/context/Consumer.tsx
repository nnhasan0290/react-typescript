import { GlobalStates } from "./Context";

const Consumer = () => {
  const data = GlobalStates();
  return (
    <div>
      <h2>Context Consumer</h2>
      <button>login</button>
    </div>
  );
};

export default Consumer;

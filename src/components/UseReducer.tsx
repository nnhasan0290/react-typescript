import { useReducer } from "react";

type State = {
  count: number;
};

type updateAction = {
  type: "increment" | "decrement";
  payload: number;
};

type resetAction = {
  type: "reset";
};

type Action = updateAction | resetAction;

const reducer = (state: State, action: Action) => {
  if (action.type === "increment") {
    return { count: state.count + action.payload };
  }
  if (action.type === "decrement") {
    return { count: state.count - action.payload };
  }
  return state;
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  console.log(state);
  return (
    <div>
      <h2>UseReducer : value {state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "increment", payload: 10 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: 10 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default UseReducer;

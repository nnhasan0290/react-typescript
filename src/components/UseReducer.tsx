import { useReducer } from "react";

type State = {
    count: number
}

type Action = {
    type: string,
    payload?: number
}

const reducer = (state:State, action:Action) => {
  if (action.type === "increment") {
    return { count: state.count + 10 };
  }
  if (action.type === "decrement") {
    return { count: state.count - 10 };
  }
  return state
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  console.log(state);
  return (
    <div>
      <h2>UseReducer : value {state.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "increment"});
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseReducer;

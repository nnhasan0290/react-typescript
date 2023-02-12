import ReactDOM from "react-dom/client";
import Event from "./components/Event";
import StyleTypes from "./components/Styles";
import UseReducer from "./components/UseReducer";
import UseState from "./components/UseState";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <Event />
    <StyleTypes
      styles={{
        border: "1px solid red",
        backgroundColor: "green",
        textTransform: "capitalize",
      }}
    />
    <UseState/>
    <UseReducer/>
  </>
);

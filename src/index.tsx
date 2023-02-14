import ReactDOM from "react-dom/client";
import Consumer from "./components/context/Consumer";
import ContextProvider from "./components/context/Context";
import Event from "./components/Event";
import StyleTypes from "./components/Styles";
import UseReducer from "./components/UseReducer";
import UseState from "./components/UseState";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ContextProvider>
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
    <Consumer/>
  </ContextProvider>
);

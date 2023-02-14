import { GlobalStates } from "./Context";

const Consumer = () => {
    const {dark} = GlobalStates();
    return(
        <div style={dark}>
            <h2>Context Consumer</h2>
        </div>
    )
}

export default Consumer;
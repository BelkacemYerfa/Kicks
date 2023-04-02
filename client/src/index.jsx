import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import App from "./App";
import { store } from "./store/store";

export const Index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<Index />);

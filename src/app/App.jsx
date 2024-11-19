import { RouterProvider } from "react-router-dom";
import router from "./provider/router";
import '../index.css'

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

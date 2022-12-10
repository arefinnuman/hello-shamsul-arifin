import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Public/Routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
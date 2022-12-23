import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import RingLoader from "react-spinners/RingLoader";
import { router } from "./Routes/Public/Routes";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      {
        // If loading is true, show loading screen
        loading ? (
          <div className="flex items-center justify-center min-h-screen">
            <div>
              <RingLoader
                color={"#007CED"}
                loading={loading}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          </div>
        ) : (
          <RouterProvider router={router} />
        )
      }
    </>
  );
}

export default App;

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BudgetPlanner from "./pages/BudgetPlanner";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/budgetplanner",
    element: <BudgetPlanner />,
  },
]);

function App() {
  return (
  <RouterProvider router={router} />
  )
}

export default App;

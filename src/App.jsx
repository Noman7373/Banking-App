import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./AppLayout/Applayout";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import AccountOverview from "./components/AccountOverview";
import History from "./components/History";

function App() {
  const router = createBrowserRouter([
    {
      path: "/", // This is the base path
      element: <Applayout />,
      children: [
        {
          path: "/", // Set the default path for Dashboard
          element: <Dashboard />,
        },
        {
          path: "/transaction-form",
          element: <TransactionForm />,
        },
        {
          path: "/accountOverview",
          element: <AccountOverview />,
        },
        {
          path: "/transaction-history",
          element: <History />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true, // Opt-in to the relative splat path behavior
      }}
    />
  );
}

export default App;

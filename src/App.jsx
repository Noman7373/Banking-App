import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./AppLayout/Applayout";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import AccountOverview from "./components/AccountOverview";
import History from "./components/History";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          element: (
            <>
              <Dashboard />
            </>
          ),
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
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

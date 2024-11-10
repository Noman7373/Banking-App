import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./AppLayout/Applayout";
import Dashboard from "./components/Dashboard";
import TransactionForm from "./components/TransactionForm";
import AccountOverview from "./components/AccountOverview";
import History from "./components/History";
import Deposite from "./components/Deposite";
import TransactionsLayout from "./AppLayout/TransactionsLayout";
import Withdraw from "./components/Withdraw";
import Transfer from "./components/Transfer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/", // This is the base path
      element: <Applayout />,
      children: [
        {
          path: "/", // Set the default path for Dashboard
          element: <TransactionsLayout />,
          children: [
            {
              path: "/",
              element: <Deposite />,
            },
            {
              path: "withdraw-history",
              element: <Withdraw />,
            },
            {
              path: "transfer-history",
              element: <Transfer />,
            },
          ],
        },
        {
          path: "/transaction-form",
          element: <TransactionForm />,
        },

        {
          path: "/transaction-history",
          element: <History />,
        },
        {
          path: "/accountOverview",
          element: <AccountOverview />,
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

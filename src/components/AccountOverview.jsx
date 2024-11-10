import { useSelector } from "react-redux";
import Dashboard from "./Dashboard";

const AccountOverview = () => {
  const transferAmounts = useSelector((state) => state.store.bankTransaction);
  return <>{transferAmounts.length > 0 ? <Dashboard /> : ""}</>;
};

export default AccountOverview;

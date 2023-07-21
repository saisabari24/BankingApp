import DepositPage from "./containers/DepositPage";
import HomePage from "./containers/HomePage";
import WithdrawPage from "./containers/WithdrawPage";
import "./BankApp.css";

function BankApp() {
  return (
    <div>
      <h1 className="bg-danger text-warning">Sai's Corporate Bank</h1>
      <HomePage />
      <br />
      <DepositPage />
      <br />
      <WithdrawPage />
    </div>
  );
}

export default BankApp;

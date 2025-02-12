import { formatCurrency } from "../utils/formatters";

type Balance = {
  current: string;
  expenses: string;
  income: string;
};

export const useBalanceData = (balance?: Balance) => {
  if (!balance) {
    return { current: "0.00", expenses: "0.00", income: "0.00" };
  }

  return {
    current: formatCurrency(balance.current),
    expenses: formatCurrency(balance.expenses),
    income: formatCurrency(balance.income),
  };
};

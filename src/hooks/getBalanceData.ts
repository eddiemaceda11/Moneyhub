import { useState } from "react";

type Balance = {
  current: number;
  expenses: number;
  income: number;
};

export const getBalanceData = ({ newBalanceData }) => {
  const [balanceData, setBalanceData] = useState<Balance>({
    current: 0,
    expenses: 0,
    income: 0,
  });

  return balanceData;
};

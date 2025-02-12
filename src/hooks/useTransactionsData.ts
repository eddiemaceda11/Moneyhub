import { formatCurrency } from "../utils/formatters";
type Transaction = {
  amount: string;
  avatar: string;
  category: string;
  date: string;
  name: string;
  recurring: boolean;
};

export const useTransactionsData = (transactions?: Transaction[]) => {
  console.log("trans: ", transactions);
  if (!transactions)
    return {
      amount: 0,
      avatar: "",
      category: "None",
      date: "",
      name: "",
      recurring: false,
    };

  const formattedTransactions = transactions.map((transactionObject) => {
    return {
      amount: formatCurrency(transactionObject.amount),
      avatar: transactionObject.avatar,
      category: transactionObject.category,
      date: transactionObject.date,
      name: transactionObject.name,
      recurring: transactionObject.recurring,
    };
  });
  return formattedTransactions;
};

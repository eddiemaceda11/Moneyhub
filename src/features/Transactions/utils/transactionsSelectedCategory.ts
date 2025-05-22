import { transactions } from '../transactionsData';

export const selectedCategory = (category: string, transactions) => {
  console.log(category, transactions);
  const transactionsByCategory = transactions.filter((transaction) => transaction.category.toLowerCase() === category.toLowerCase());
  console.log(transactionsByCategory);
  return transactionsByCategory;
};

import { type transaction } from '../types';

export const selectedCategory = (
  category: string,
  transactions: transaction[]
) => {
  console.log(transactions);
  console.log(category);
  if (category === 'All Transactions') return transactions;
  const transactionsByCategory = transactions.filter(
    (transaction) =>
      transaction.category.toLowerCase() === category.toLowerCase()
  );
  return transactionsByCategory;
};

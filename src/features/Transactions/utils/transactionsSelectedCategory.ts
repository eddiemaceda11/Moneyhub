import { type transaction } from '../types';

export const selectedCategory = (
  category: string,
  transactions: transaction[]
) => {
  const transactionsByCategory = transactions.filter(
    (transaction) =>
      transaction.category.toLowerCase() === category.toLowerCase()
  );
  return transactionsByCategory;
};

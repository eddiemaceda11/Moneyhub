import { transaction } from '../types';

export const transactionsSortBy = (sortOption: string, setFilteredTransactions: React.Dispatch<React.SetStateAction<transaction[]>>, filteredTransactions?: transaction[], transactions?: transaction[]) => {
  // setSortBy(sortOption);
  let sortedArray;
  console.log(sortOption);

  switch (sortOption) {
    case 'latest':
      if (transactions) setFilteredTransactions([...transactions]);
      break;
    case 'oldest':
      if (transactions) {
      }
      break;
    case 'az':
      sortedArray = filteredTransactions?.sort((a, b) => a.name.localeCompare(b.name));
      console.log(sortedArray);
      if (sortedArray) setFilteredTransactions([...sortedArray]);
      break;
    case 'za':
      let tempSortedArray = filteredTransactions?.sort((a, b) => a.name.localeCompare(b.name));
      sortedArray = tempSortedArray?.reverse();
      if (sortedArray) setFilteredTransactions([...sortedArray]);
      break;
    case 'lowest':
      sortedArray = filteredTransactions?.sort((a, b) => a.amount - b.amount);
      if (sortedArray) setFilteredTransactions([...sortedArray]);
      break;
    case 'highest':
      sortedArray = filteredTransactions?.sort((a, b) => b.amount - a.amount);
      if (sortedArray) setFilteredTransactions([...sortedArray]);
      break;
  }
};

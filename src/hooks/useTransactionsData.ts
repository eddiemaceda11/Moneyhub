import { formatCurrency } from "../utils/formatters";

type Transaction = {
  amount: string;
  avatar: string;
  category: string;
  date: string;
  name: string;
  recurring: boolean;
};

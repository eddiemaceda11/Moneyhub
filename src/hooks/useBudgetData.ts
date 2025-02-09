import { formatCurrency } from "../utils/formatters";

type Budget = {
  category: string;
  maximum: string;
  theme: string;
};

export const useBudgetData = (budgetData: Budget[]) => {
  if (!budgetData)
    return [
      { category: "", maximum: 0, theme: "" },
      { category: "", maximum: 0, theme: "" },
      { category: "", maximum: 0, theme: "" },
      { category: "", maximum: 0, theme: "" },
    ];

  const formattedBudgetData: Budget[] = budgetData.map((budgetObject) => {
    return {
      category: budgetObject.category,
      maximum: formatCurrency(budgetObject.maximum.toString()),
      theme: budgetObject.theme,
    };
  });

  return formattedBudgetData;
};

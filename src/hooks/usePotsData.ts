import { formatCurrency } from "../utils/formatters";

type Pots = {
  name: string;
  target: string;
  theme: string;
  total: string;
};

export const usePotsData = (pots?: Pots[]) => {
  if (!pots)
    return [
      { name: "", target: 0, theme: "", total: 0 },
      { name: "", target: 0, theme: "", total: 0 },
      { name: "", target: 0, theme: "", total: 0 },
      { name: "", target: 0, theme: "", total: 0 },
    ];

  const formattedPots: Pots[] = pots.map((potObject) => {
    return {
      name: potObject.name,
      target: formatCurrency(potObject.target.toString()),
      theme: potObject.theme,
      total: formatCurrency(potObject.total.toString()),
    };
  });

  return formattedPots;
};

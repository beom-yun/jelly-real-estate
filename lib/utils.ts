export const TransactionType = {
  sale: "매매",
  lease: "전세",
  monthlyRent: "월세",
};

export const getFormattedDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${month >= 10 ? "" : "0"}${month}-${day}`;
};

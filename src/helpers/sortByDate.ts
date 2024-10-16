const sortByDate = (sortableItems: any[]) => {
  const cloneItems = structuredClone(sortableItems);
  return cloneItems.sort(
    (a: any, b: any) => new Date(b.Date).getTime() - new Date(a.Date).getTime()
  );
};

export default sortByDate;

import React from 'react';

const sortByPopupularity = (arr: any[], ids: string[]) => {
  if (!ids) {
    return null;
  }
  const uniqIds = new Set(ids);
  const clonData = structuredClone(arr);
  const sortedData = clonData.sort((a: any, b: any) => {
    return (
      Array.from(uniqIds).indexOf(a.Id) - Array.from(uniqIds).indexOf(b.Id)
    );
  });
  return sortedData;
};

export default sortByPopupularity;

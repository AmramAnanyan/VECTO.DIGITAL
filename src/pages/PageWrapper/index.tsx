import React, { ReactNode } from 'react';

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex min-w-full bg-[#040404] min-h-screen'>{children}</div>
  );
};

export default PageWrapper;

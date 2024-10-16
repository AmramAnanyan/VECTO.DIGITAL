export const headerStyles = `bg-black w-36 min-h-screen flex flex-col 
justify-center items-center absolute opacity-1`;
export const setActiveHeaderStyles = (active: boolean) => {
  if (!active) {
    return { transition: 'ease-in 0.3s' };
  }
  return {
    width: '240px',
    transition: 'ease-in 0.3s',
    opacity: 0.8
  };
};
export const setActiveLiStyles = (active: boolean) => {
  if (!active) {
    return {
      transition: 'ease-in 0.1s',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%'
    };
  }
  return {
    width: '200px',
    transition: 'ease-in 0.1s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
    borderRadius: '12px'
  };
};

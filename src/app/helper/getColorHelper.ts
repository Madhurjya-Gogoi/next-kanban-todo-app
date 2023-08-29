export const getStatusClass = (status: string) => {
  if (status === 'Inprogress') {
    return 'bg-yellow-500';
  } else if (status === 'Done') {
    return 'bg-green-500';
  } else if (status === 'Todo') {
    return 'bg-blue-500';
  }

  return '';
};
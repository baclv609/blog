const useInput = (inputRef: any) => {
  const onTouchStart = () => {
    inputRef.value.focus();
  };

  return {
    onTouchStart,
  };
};

export { useInput };

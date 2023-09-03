const onChangeInput = (e, nameChanger, numberChanger) => {
  const { name, value } = e.currentTarget;
  switch (name) {
    case 'name':
      nameChanger(value);
      break;
    case 'number':
      numberChanger(value);
      break;
    default:
      break;
  }
};

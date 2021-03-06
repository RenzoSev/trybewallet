const checkInput = (value, error) => {
  const normalBorder = value.length
    ? `border-green-300`
    : `border-green-100 focus:border-green-300`;

  const errorBorder = 'border-red-300';

  return `
  w-3/5 py-3 px-4 text-md text-gray-600 
  outline-none border-2 ${error ? errorBorder : normalBorder}
  rounded-xl placeholder-gray-300 transition-all 
  `;
};

const sharedStyles = {
  base: 'h-screen bg-gray-100 flex flex-col justify-center px-20',
  container: 'h-4/5 flex shadow-lg',
  sideContainerInputs: 'flex flex-col items-center justify-around gap-6 w-full',
  button: `
    w-3/5 p-3 bg-purple-500 rounded-xl text-md 
    text-white shadow tracking-tight font-medium 
    transition-all hover:bg-purple-400 focus:outline-none outline-none`,
  errorMsg: `
      flex flex-col py-4 px-10 rounded-lg 
      items-center text-sm text-red-400 bg-red-100`,
};

const styles = {
  loginStyles: {
    base: sharedStyles.base,
    container: sharedStyles.container,
    leftContainer: `
    flex flex-col items-center 
    justify-evenly w-1/2 bg-white rounded p-6
    `,
    leftContainerInputs: sharedStyles.sideContainerInputs,
    leftContainerButton: sharedStyles.button,
    input: (value, error) => checkInput(value, error),
    rightContainer:
      'flex flex-col justify-center bg-purple-400 w-1/2 rounded p-6',
    constainerCreateAccount: 'flex gap-1 text-sm text-gray-600 font-bold',
    createAccount: `
      text-purple-600 cursor-pointer 
      transition-all hover:underline hover:text-purple-500,
    `,
    errorMsg: sharedStyles.errorMsg,
  },
  walletStyles: {
    base: sharedStyles.base,
    container: 'h-4/5 flex flex-col shadow-lg bg-white',
    header: 'flex justify-between items-center py-5 px-8',
    input: `
    text-sm p-2 w-2/12 outline-none 
    border border-purple-300 text-gray-600 rounded-lg
    `,
    label:
      'p-2 rounded-lg flex items-center gap-2 bg-purple-400 shadow cursor-pointer',
    select: `
    text-gray-100 appearance-none text-sm bg-purple-400 outline-none cursor-pointer
    `,
    form: 'flex justify-between py-5 pl-5 pr-8 border-b border-t',
    editform: 'bg-gray-300 flex justify-between py-5 pl-5 pr-8 border-b border-t',
    button: `
    bg-green-400 text-gray-100 px-5 font-bold outline-none focus:outline-none
    rounded-lg hover:bg-green-300 transition-all hover:text-gray-50 shadow
    `,
    table: 'text-gray-600 text-sm w-full border-separate',
    td: 'px-4 text-center',
    buttonEditDelete: (color) =>
      `
      text-${color}-400 hover:text-${color}-300 transition-all 
      outline-none focus:outline-none focus:border-none
      `,
  },
  registerStyles: {
    base: sharedStyles.base,
    container: sharedStyles.container,
    leftContainer:
      'flex flex-col justify-center bg-purple-400 w-1/2 rounded p-36',
    rightContainer: `
    flex flex-col items-center 
    justify-evenly w-1/2 bg-white rounded p-6
    `,
    rightContainerInputs: sharedStyles.sideContainerInputs,
    rightContainerButton: `
    w-3/5 p-3 bg-purple-500 rounded-xl text-md 
    text-white shadow tracking-tight font-medium 
    transition-all hover:bg-purple-400 focus:outline-none outline-none
    `,
    input: (value, error) => checkInput(value, error),
    eyeToggle: (color) => `absolute left-3/4 text-gray-${color} cursor-pointer`,
    registerMsg: `
      flex flex-col py-4 px-10 rounded-lg 
      items-center text-sm text-green-400 bg-green-100`,
    errorMsg: sharedStyles.errorMsg,
  },
};

export default styles;

const checkLength = (value) => {
  const result = value.length 
  ? 'border-green-300' 
  : 'border-green-100';

  return `
  w-3/5 py-3 px-4 text-md text-gray-600 
  outline-none border-2 ${result}
  rounded-xl placeholder-gray-300 transition-all 
  focus:border-green-300
  `
}

const styles = {
  loginStyles: {
    base: 'h-screen bg-gray-100 flex flex-col justify-center px-20',
    container: 'h-4/5 flex shadow-lg',
    leftContainer: `
    flex flex-col items-center 
    justify-evenly w-1/2 bg-white rounded p-6
    `,
    leftContainerInputs:
      'flex flex-col items-center justify-around gap-6 w-full',
    leftContainerButton: `
    w-3/5 p-3 bg-purple-500 rounded-xl text-md 
    text-white shadow tracking-tight font-medium 
    transition-all hover:bg-purple-400 outline:none
    `,
    input: (value) => checkLength(value),
    rightContainer:
      'flex flex-col justify-center bg-purple-400 w-1/2 rounded p-6',
  },
  walletStyles: {
    base: 'h-screen bg-gray-100 flex flex-col justify-center px-20',
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
};

export default styles;
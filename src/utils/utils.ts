
export function format(first: string, middle: string, last: string): string {
  return (
    (first || '') +
    (middle ? ` ${middle}` : '') +
    (last ? ` ${last}` : '')
  );
}

export const getAbbr = (str): string => {
  if (str) {
    return str.split(' ').length >= 2 ? str.match(/\b(\w)/g).join('') : str.substr(0, 2)
  } else {
    return ""
  }
}

export function keepOnlyDigits(value: string) {
  return value.replace(/\D/g, '');
}

export function getPaddedNumber(value: number, length = 2) {
  return value.toString().padStart(length, '0');
}

export function getReadableDate(value: Date) {
  const day = value.getDate();
  const month = value.getMonth() + 1;
  const year = value.getFullYear();

  const hours = getPaddedNumber(value.getHours());
  const minutes = getPaddedNumber(value.getMinutes());

  return `${day}/${month}/${year} às ${hours}h${minutes}`;
}

export function getEncodedUriString(value: string) {
  return encodeURIComponent(value);
}

export function getYearMonthDay(date: Date) {
  return date.toISOString().split('T')[0];
}

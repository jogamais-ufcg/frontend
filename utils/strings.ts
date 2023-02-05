export function keepOnlyDigits(value: string) {
  return value.replace(/\D/g, '');
}

export function getPaddedNumber(value: number, length = 2) {
  return value.toString().padStart(length, '0');
}

export function getReadableDate(value: Date, withTime = true) {
  const day = getPaddedNumber(value.getDate());
  const month = getPaddedNumber(value.getMonth() + 1);
  const year = value.getFullYear();

  const hours = getPaddedNumber(value.getHours());
  const minutes = getPaddedNumber(value.getMinutes());

  const result = `${day}/${month}/${year}`;
  if (withTime) {
    return `${result} às ${hours}h${minutes}`;
  }

  return result;
}

export function getEncodedUriString(value: string) {
  return encodeURIComponent(value);
}

export function getYearMonthDay(date: Date) {
  return date.toISOString().split('T')[0];
}

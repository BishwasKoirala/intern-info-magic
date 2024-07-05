function convertToISODate(dateString : string) {
  const date = new Date(dateString.replace(/\//g, '-')); // Replace '/' with '-'
  return date.toISOString();
}
console.log(convertToISODate('12/31/2020')); // 2020-12-31T00:00:00.000Z
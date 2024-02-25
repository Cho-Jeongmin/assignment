export const getDate = (createdAt, space = false, time = false) => {
  const TIME_ZONE = 9 * 60 * 60 * 1000; // 9시간
  const date = new Date(createdAt);
  const krDate = new Date(date.getTime() + TIME_ZONE)
    .toISOString()
    .slice(0, time ? 19 : 10)
    .replace("T", " ")
    .replaceAll("-", space ? ". " : ".");

  return String(krDate);
};

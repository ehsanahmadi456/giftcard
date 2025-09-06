import jalaali from "jalaali-js";

export function formatJalaliDate(timestamp) {
  if (!timestamp) return "-";

  let ts = Number(timestamp);
  if (String(ts).length === 10) {
    ts = ts * 1000;
  }

  const date = new Date(ts);
  if (isNaN(date.getTime())) return "-";

  const { jy, jm, jd } = jalaali.toJalaali(date);
  return `${jy}/${String(jm).padStart(2, "0")}/${String(jd).padStart(2, "0")}`;
}

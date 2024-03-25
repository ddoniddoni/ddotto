import { FIRST_LOTTO_DATE } from "../constant";

export const getKoreaTime = () => {
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60 + 1000);
  const koreaTimeDiff = 9 * 60 * 60 * 1000;
  const korNow = new Date(utc + koreaTimeDiff);
  return korNow;
};

export const getThisWeek = () => {
  const now = getKoreaTime();
  const firstRound = 1;
  const firstWeek = new Date(FIRST_LOTTO_DATE);
  let diff = Math.abs(now.getTime() - firstWeek.getTime());
  // diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
  diff = Math.floor(diff / (1000 * 60 * 60 * 24));
  return Math.floor(diff / 7) + firstRound;
};

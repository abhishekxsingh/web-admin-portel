import moment from "moment";

import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";

TimeAgo.addLocale(en);

const timeAgo = new TimeAgo("en-US");

export const toCapitalizeFirstLetter = (string) => {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return " ";
};

export const toDateFormat = (string) => {
  if (string) {
    const date = new Date(string);
    const newDate = moment(date).format("DD-MMM-YYYY");

    return newDate;
  }
  return " ";
};

export const toDateTimeFormat = (string) => {
  if (string) {
    const date = new Date(string);
    const newDate = moment(date, "DD/MM/YYYY").format("YYYY-MM-DD[T]HH:mm:ss");

    return newDate;
  }
  return " ";
};

export const toTimeAgoFormat = (dateString) => {
  return timeAgo.format(new Date(dateString));
};

export const toNumberWithCommaAndDecimal = (number) => {
  const cardValue = parseFloat(number).toLocaleString("en-IN", {
    currency: "INR",
    maximumFractionDigits: 2,
  });

  if (cardValue.indexOf(".") === -1) {
    return `₹ ${cardValue}`;
  }

  return cardValue;
};

const firstLetterCapital = (payload) =>
  payload.charAt(0).toUpperCase() + payload.slice(1);

export const unslugText = (text) => {
  const splitText = text.split("-");

  return splitText
    .map((data) => {
      return firstLetterCapital(data);
    })
    .join(" ");
};

export const getTotalPercentage = (numerator, denominator) => {
  return ((numerator / denominator) * 100).toFixed(2);
};

export const getPercentageLeft = (numerator, denominator) => {
  return (((denominator - numerator) / denominator) * 100).toFixed(2);
};

export const attachParams = (baseUrl, params) => {
  const url = new URL(baseUrl);

  url.search = new URLSearchParams(params).toString();

  return url;
};

export const sleep = (ms = 2000) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const clean = (obj) => {
  for (var propName in obj) {
    if (!obj[propName]) {
      delete obj[propName];
    }
  }
  return obj
}
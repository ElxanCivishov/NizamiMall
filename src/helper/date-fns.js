import {
  format,
  formatRelative,
  isToday,
  isYesterday,
  parseISO,
} from "date-fns";
import { az } from "date-fns/locale";

export const convertDate = (date) => {
  if (date) {
    // Parse the MongoDB date string to a JavaScript Date object
    const jsDate = parseISO(date);
    // Format the JavaScript Date using the Azerbaijani locale
    return format(jsDate, "MM/dd/yyyy", { locale: az });
  }
};

export const convertDateTime = (date) => {
  if (date) {
    // Parse the MongoDB date string to a JavaScript Date object
    const jsDate = parseISO(date);
    // Format the JavaScript Date using the Azerbaijani locale
    return format(jsDate, "MM/dd/yyyy p", { locale: az });
  }
  return "Etibarsız tarix";
};

export const convertDateTimeAgo = (date) => {
  if (date) {
    const jsDate = new Date(date);
    if (isYesterday(jsDate) || isToday(jsDate)) {
      // Display time ago for today,yesterday
      return formatRelative(jsDate, new Date(), {
        locale: az,
      });
    } else {
      // Format as "dd/mm/yyyy" for other dates
      return format(jsDate, "dd MMM yyyy p", { locale: az });
    }
  }

  return "Etibarsız tarix";
};

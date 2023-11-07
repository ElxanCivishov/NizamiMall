import { format, parseISO } from "date-fns";
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

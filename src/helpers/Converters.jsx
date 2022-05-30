// THIS PART WILL ALLOW US TO SWITCH BETWEEN CELSIUS & FAHRENHEIT TEMP//
export const convertF = (temp) => {
  return convertC(temp) * 1.8 + 32;
};

export const convertC = (temp) => {
  return temp - 273.15;
};

// THIS PART WILL ALLOW US TO GET THE GOOD DATE FORMAT//
export const convertLongTime = (unix) => {
  return new Date(unix * 1000).toLocaleTimeString();
};

export const convertShortTime = (unix) => {
  return unix
    ? new Date(unix * 1000).toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
      })
    : new Date().toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true
      });
};

export const convertLongDay = (unix) => {
  return unix
    ? new Date(unix * 1000).toLocaleString("en-US", { weekday: "long" })
    : new Date().toLocaleString("en-US", { weekday: "long" });
};

export const convertShortDay = (unix) => {
  return unix
    ? new Date(unix * 1000).toLocaleString("en-US", { weekday: "short" })
    : new Date().toLocaleString("en-US", { weekday: "short" });
};

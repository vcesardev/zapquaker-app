import { Dimensions, PixelRatio, Platform } from "react-native";

const { height, width } = Dimensions.get("window");
const BASE_WIDTH = 320;

const scale = width / BASE_WIDTH;

const fontScale = (value: number): number => {
  const newSize = value * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

const heightPercentageToDP = (value: string): number =>
  PixelRatio.roundToNearestPixel((height * parseFloat(value)) / 100);

const widthPercentageToDP = (value: string): number =>
  PixelRatio.roundToNearestPixel((width * parseFloat(value)) / 100);

const emptyToNull = (obj: Record<string, unknown>): Record<string, unknown> => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === "" || obj[key] === undefined) {
      obj[key] = null;
    }
  });

  return obj;
};

const formatNumber = (value: number): string => {
  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

const calculatePercentageValue = (
  value: number,
  percentage: number
): string => {
  const percentageValue = value * percentage;
  const valueFormatted = formatNumber(value - percentageValue);
  return valueFormatted;
};

const calculatePercentageTimeMinutes = (
  minutes: number,
  percentage: number
): string => {
  const percentageTime = minutes - minutes * percentage;
  const days = Math.floor(percentageTime / (60 * 24));
  const hours = Math.floor((percentageTime % (60 * 24)) / 60);
  const minutesLeft = Math.floor(percentageTime % 60);

  const displayDays = days > 0 ? days + (days === 1 ? " Dia" : " Dias") : "";
  const displayHours =
    hours > 0 ? hours + (hours === 1 ? " Hora" : " Horas") : "";
  const displayMinutes =
    minutesLeft > 0
      ? "e " + minutesLeft + (minutesLeft === 1 ? " Minuto " : " Minutos")
      : "";

  return `${displayDays}${
    hours > 0 && days > 0 ? "," : ""
  } ${displayHours} ${displayMinutes}`;
};

export {
  emptyToNull,
  fontScale,
  heightPercentageToDP,
  widthPercentageToDP,
  formatNumber,
  calculatePercentageValue,
  calculatePercentageTimeMinutes,
};

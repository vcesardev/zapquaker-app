type Colors = {
  primary: string;
  secondary: string;
  textPrimary: string;
  textSecondary: string;
  highlightedText: string;
  levelBackground: string;
  highlightedLevelBackground: string;
};

type Fonts = {
  regular: string;
  medium: string;
};

export type Theme = { colors: Colors; fonts: Fonts };

const fonts: Fonts = {
  medium: "Poppins_500Medium ",
  regular: "Poppins_400Regular",
};

const lightColors: Colors = {
  primary: "#e4e6ea",
  secondary: "#fff",
  textPrimary: "#1d4ed8",
  textSecondary: "#1f2937",
  levelBackground: "#4b5563",
  highlightedLevelBackground: "#fbbf24",
  highlightedText: "#000",
};

const darkColors: Colors = {
  primary: "#4b5563",
  secondary: "#1f2937",
  textPrimary: "#3b82f6",
  textSecondary: "#f3f4f6",
  levelBackground: "#4b5563",
  highlightedLevelBackground: "#fbbf24",
  highlightedText: "#000",
};

export const lightTheme: Theme = { colors: lightColors, fonts: fonts };

export const darkTheme: Theme = { colors: darkColors, fonts: fonts };

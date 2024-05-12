// Components
import { StatusBar } from "expo-status-bar";
import { Main } from "./src/Main";
// Styles
import { useFonts } from "expo-font";
// Intl
import "intl";
import "intl/locale-data/jsonp/pt-BR";

const App = () => {
  const [isFontsLoaded] = useFonts({
    "GeneralSans-400": require("./src/assets/fonts/GeneralSans-Regular.otf"),
    "GeneralSans-600": require("./src/assets/fonts/GeneralSans-Semibold.otf"),
    "GeneralSans-700": require("./src/assets/fonts/GeneralSans-Bold.otf"),
  });

  if (!isFontsLoaded) return null;

  return (
    <>
      <StatusBar style="auto" />

      <Main />
    </>
  );
};

export default App;

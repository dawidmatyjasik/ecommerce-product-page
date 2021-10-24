import { ThemeProvider } from "styled-components";
import Page from "./Page/Page";
import { GlobalStyle } from "./theme/globalStyles";
import { theme } from "./theme/theme";

function App() {
  console.log(theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page />
    </ThemeProvider>
  );
}

export default App;

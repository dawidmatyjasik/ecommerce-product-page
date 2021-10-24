import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./theme/globalStyles";
import { theme } from "./theme/theme";

function App() {
  console.log(theme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>Test</h1>
    </ThemeProvider>
  );
}

export default App;

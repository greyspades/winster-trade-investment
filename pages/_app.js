import '../styles/globals.css'
import '../styles/blocks.min.css'
import '../styles/plugins.min.css'
import '../styles/theme-styles.min.css'
import '../styles/widgets.min.css'
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
     primary: {
        main: "#ffab00" // This is an orange looking color
               },
     secondary: {
        main: "#ffff" //Another orange-ish color
                }
           },

});

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default MyApp

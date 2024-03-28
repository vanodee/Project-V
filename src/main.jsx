import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import '@fontsource/chakra-petch';


// Custom Styles------------------------//
const colors = {
  primarye: {
    1: '',
    2: ''
  },

}

const fonts = {
  body: `'Chakra Petch', sans-serif`,
  heading: `'Chakra Petch', sans-serif`
}

const customStyles = extendTheme({ colors, fonts });


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={customStyles}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

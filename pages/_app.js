import '../styles/globals.css'

export default function App({ Component, pageProps }) {

componentDidMount() {
  fetch('http://www.omdbapi.com/?apikey=REACT_APP__APIKey&')
}


  return <Component {...pageProps} />
}

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// App.jsとしての追記文
import { createMuiTheme, CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import PageHome from './components/PageHome'
import PageNotFound from './components/PageNotFound'
import PageThread from './components/PageThread'

const App = () => {
  const theme = createMuiTheme()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path={'/'}>
            <PageHome />
          </Route>
          <Route exact path={'/threads/:threadId'}>
            <PageThread />
          </Route>
          <Route path={'*'}>
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

// App,js部分

ReactDOM.render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
import React from "react"

import Layout from "./Layout"

import Playground from "../containers/Playground"
import Footer from "../containers/Footer"
import Main from "../components/Main"

import { ManagerProvider } from "./Manager"

const App: React.FC = () => {
  return (
    <Layout>
      <ManagerProvider>
        <Main>
          <Playground />
          <Footer />
        </Main>
      </ManagerProvider>
    </Layout>
  )
}

export default App

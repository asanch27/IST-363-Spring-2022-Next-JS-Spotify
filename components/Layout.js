import { Fragment } from 'react'

import Header from './Header'
import Footer from './Footer'
import Main from './Main.js'

export default function Layout({ children }) {
    return <Fragment> 
        <Header />
        <Main>
            {children}
        </Main>
        <Footer />
    </Fragment>
}
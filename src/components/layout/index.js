import React, {Fragment} from 'react'

import Header from '../header'
import Footer from '../footer'

import './style.scss';

const Layout = ({children}) => (
	<Fragment>
		<Header/>
		<main>
			{children}
		</main>
		<Footer/>
	</Fragment>
)

const Meta = () => (
	<Fragment>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>UnLars</title>
	</Fragment>
)


export default Layout
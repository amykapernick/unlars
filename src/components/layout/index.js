import React, {Fragment} from 'react'
import {Helmet} from 'react-helmet'

import Header from '../header'
import Footer from '../footer'

import './style.scss';

const Layout = ({children}) => (
	<Fragment>
		<Meta />
		<Header/>
		<main>
			{children}
		</main>
		<Footer/>
	</Fragment>
)

const Meta = () => (
	<Helmet>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>UnLars</title>
	</Helmet>
)


export default Layout
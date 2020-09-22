import React from 'react'

import Layout from '../components/layout'

import '../scss/layouts/gallery.scss';

const IndexPage = () => (
	<Layout>
		<ul class="gallery">
			<li>
				<img src="/img/lars-virtual-bg-hover-transparent.png" alt="lars"/>
			</li>
			<li>
				<img src="/img/lars-virtual-bg-peeking-lama-looking-2.jpg" alt="lars"/>
			</li>
			<li>
				<img src="/img/lars-virtual-bg-peeking-lama-looking.jpg" alt="lars"/>
			</li>
			<li>
				<img src="/img/lars_dancing.gif" alt="lars"/>
			</li>
			<li>
				<img src="/img/gospel.png" alt="lars"/>
			</li>
			<li>
				<img src="/img/lars_fay_magic.gif" alt="lars"/>
			</li>
		</ul>
	</Layout>
)

export default IndexPage
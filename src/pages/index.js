import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'
import Image from '@theme/IdealImage'
import logo from './assets/images/logo.png'
import useBaseUrl from '@docusaurus/useBaseUrl'

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext()
	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div className='container'>
				{/* <h1 className='hero__title'>{siteConfig.title}</h1> */}
				<img src={useBaseUrl('/img/Lorros_lrg-wht.png')} />
				<p className='hero__subtitle'>{siteConfig.tagline}</p>
				<div className={styles.buttons}>
					<Link
						className='button button--secondary button--lg'
						to='/docs/intro'
					>
						Get Started
					</Link>
				</div>
			</div>
		</header>
	)
}

export default function Home() {
	const { siteConfig } = useDocusaurusContext()
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description='democratic decision making for boards and committees'
		>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	)
}

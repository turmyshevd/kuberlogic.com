import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--secondary', styles.heroBanner)}>
    <div className="container">
       <div className="row">
         <div className={clsx('col col--7')}>
           <img src="/img/architecture.png"/>
         </div>
         <div className={clsx('col')} style={{marginTop:100}}>
           <h1 className="hero__title">{siteConfig.tagline}</h1>
           <div className={styles.buttons}>
              <Link
                 className="button button--primary button--lg"
                 to="/docs/getting-started/">
                 Getting started
              </Link>
           </div>
         </div>
      </div>
    </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
    <div className="container" style={{marginTop:25, width:900}}>
  <h2 className="text--center">What is KuberLogic?</h2>
  <p className="text--center" style={{fontSize:20}}>KuberLogic is a SaaS enabler for Software vendors that have a single-tenant application and helps easily turn this existing application into a Software as a Service offering. KuberLogic allows software vendors to start their SaaS journey here and now with minimal application modidication.</p>
     </div>
            <div className="container" style={{marginTop:60}}>
  <h2 className="text--center">Features included</h2>
     </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

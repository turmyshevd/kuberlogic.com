import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Multi-Tenancy for your application',
    Svg: require('@site/static/img/tenants.svg').default,
    description: (
      <>
        KuberLogic adds Multi-Tenancy to applications using namespace per tenant model, which represents a good blend of isolation and efficiency.
      </>
    ),
  },
  {
    title: 'Backup/Restore capability',
    Svg: require('@site/static/img/backups.svg').default,
    description: (
      <>
        Backups and restores feature is provided via Velero integration. Both file-based and volume snapshot based backups are supported.
      </>
    ),
  },
  {
    title: 'Subscriptions and Billing',
    Svg: require('@site/static/img/billing.svg').default,
    description: (
      <>
        KuberLogic uses webhooks to integrate with various billing providers such as ChargeBee, Stripe, or any other custom services.
      </>
    ),
  },
];

const FeatureList1 = [
  {
    title: 'Custom domains and TLS support',
    Svg: require('@site/static/img/domain.svg').default,
    description: (
      <>
        KuberLogic automatically ensures subdomain allocation and access through it for each Tenant. Allows you to secure application access with SSL.
      </>
    ),
  },
  {
    title: 'Application updates',
    Svg: require('@site/static/img/updates.svg').default,
    description: (
      <>
      KuberLogic allows you to manage application updates on a per-tenant basis, which gives a wide range of customization options.
      </>
    ),
  },
  {
    title: 'CLI and API for management',
    Svg: require('@site/static/img/api.svg').default,
    description: (
      <>
KuberLogic provides CLI and REST APIs that give you the ability to manage application instances, as well as rich integration options.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          {FeatureList1.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

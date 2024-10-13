import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" aria-label={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const [featureList, setFeatureList] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function fetchFeatures() {
      try {
        const response = await fetch('https://example.com/api/features');
        const data = await response.json();
        setFeatureList(data);
      } catch (error) {
        console.error('Error fetching feature list:', error);
      }
    }
    fetchFeatures();
  }, []);

  const filteredFeatures = featureList.filter(feature =>
    feature.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className={styles.features}>
      <div className="container">
        <input
          type="text"
          placeholder="Filter features"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          aria-label="Filter features"
        />
        <div className="row">
          {filteredFeatures.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
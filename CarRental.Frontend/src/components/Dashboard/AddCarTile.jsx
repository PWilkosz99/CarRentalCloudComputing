import React from 'react';
import { useBlob } from '../../contexts/BlobContext';
import styles from './Dashboard.module.css';

export default function AddCarTile(props) {
  const { getImage } = useBlob();
  return (
    <div className={styles.dashboard_card}>
      <div className={styles.dashboard_title}>
        <h1>
          {props.car.manufacturer}
          {' '}
          {props.car.model}
        </h1>
      </div>
      <div className={styles.dashboard_row}>
        <img src={getImage(props.car.id)} className={styles.dashboard_card_img} alt={props.car.manufacturer} />
      </div>
      <div className={styles.dashboard_row_text}>
        <span className={styles.dashboard_label}>Type: </span>
        <span className={styles.dashboard_value}>{props.car.type}</span>
      </div>
      <div className={styles.dashboard_row_text}>
        <span className={styles.dashboard_label}>Fuel: </span>
        <span className={styles.dashboard_value}>{props.car.fuel}</span>
      </div>
      <div className={styles.dashboard_row_text}>
        <span className={styles.dashboard_label}>Seats: </span>
        <span className={styles.dashboard_value}>{props.car.seats}</span>
      </div>
      <div className={styles.dashboard_row_text}>
        <span className={styles.dashboard_label}>Axes: </span>
        <span className={styles.dashboard_value}>{props.car.axes}</span>
      </div>
      <div className={styles.dashboard_row_text}>
        <span className={styles.dashboard_label}>HPs: </span>
        <span className={styles.dashboard_value}>{props.car.hPs}</span>
      </div>
      <div className={styles.dashboard_row_text}>
        <span className={styles.dashboard_label}>Gearbox: </span>
        <span className={styles.dashboard_value}>{props.car.gearbox}</span>
      </div>
      <div className={styles.dashboard_row_text}>
        <span className={styles.dashboard_label}>AC: </span>
        <span className={styles.dashboard_value}>{props.car.airConditioning ? 'Yes' : 'No'}</span>
      </div>
      <div className={styles.dashboard_row_text}>
        <span className={styles.dashboard_label}>Notes: </span>
        <span className={styles.dashboard_value}>{props.car.hPs}</span>
      </div>
      <button className={styles.btn} onClick={() => props.handleChoice(props.car.id)}>Select</button>
    </div>
  );
}

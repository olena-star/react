import styles from './Stars.module.css'

function Stars({ rating }) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`fa fa-star ${i < Math.round(rating)? 'active' : ''}`}
        ></span>
      );
    }
    return <div>{stars}</div>;
  }
  export default Stars
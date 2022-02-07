// import DiscreteSlider from 'streamlit-discrete-slider'
import ReactSlider from 'react-slider'
import styles from './slider.module.css';
// import PropTypes from 'prop-types';

// export const Slider = () => {
//   return <DiscreteSlider />
// }

export const Slider = () => {
  return <ReactSlider
    className={styles.slider}
    thumbClassName={styles.thumb}
    trackClassName="example-track"
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
/>
}



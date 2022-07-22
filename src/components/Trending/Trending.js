import React, { useState } from 'react';
import { TrendingData } from './TrendingData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import styles from "./Trending.module.scss";
import { useNavigate } from 'react-router';

function Trending({ slides }) {
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null)
  const length = slides.length;

  let navigate = useNavigate();
  function handleClick() {
    navigate('/products')
  }

  const nextSlide = () => {
    if (current < TrendingData.length - 3) { setCurrent(current + 1) }
  }

  const Imagehandler = (index) => {
    setSelectedImage(TrendingData[index])
  }

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1)
    }
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <>
      <div className={styles.ViewAll}>
        <div><h1>Trending</h1></div>
        <div className={styles.viewButton}><button onClick={handleClick} className={styles.viewBtn}>View All</button></div>
      </div>
      <section className={styles.slider}>
        <FaArrowAltCircleLeft className={styles.leftarrow} onClick={prevSlide} />
        {
            TrendingData.map((slide, index) => {
            return (
              <div className={index === current ? styles.slideActive : styles.slide} key={index}>
                {index === current &&
                  <div className={styles.ImageSection}>
                    <img src={slide.image} alt='travel image' onClick={() => Imagehandler(current)} className={styles.Image} />,
                    <img src={TrendingData[index + 1].image} alt='travel image' className={styles.Image} onClick={() => Imagehandler(current + 1)} />
                    <img src={TrendingData[index + 2].image} alt='travel image' className={styles.Image} onClick={() => Imagehandler(current + 2)} />
                    <img src={TrendingData[index + 3].image} alt='travel image' className={styles.Image} onClick={() => Imagehandler(current + 3)} />
                    <img src={TrendingData[index + 4].image} alt='travel image' className={styles.Image} onClick={() => Imagehandler(current + 4)} />
                  </div>}
              </div>
            )
          })
        }
        <FaArrowAltCircleRight className={styles.rightarrow} onClick={nextSlide} />
      </section>
    </>
  )
}

export default Trending




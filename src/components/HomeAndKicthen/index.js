import React, { useState } from 'react';
import { HouseHold } from './Data';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import styles from "./HomeKitchen.module.scss";
import { useNavigate } from 'react-router';
import Header from '../Header/Header';

function HomeAndKicthen({ slides }) {
  const [current, setCurrent] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null)
  const length = slides.length;

  let navigate = useNavigate();
  function handleClick() {
    // navigate('/products')
  }

  const nextSlide = () => {
    if (current < HouseHold.length - 3) { setCurrent(current + 1) }
  }

  const Imagehandler = (index) => {
    setSelectedImage(HouseHold[index])
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
        <div><h1>HouseHold</h1></div>
        <div className={styles.viewButton}><button onClick={handleClick} className={styles.viewBtn}>View All</button></div>
      </div>
      <section className={styles.slider}>
        <FaArrowAltCircleLeft className={styles.leftarrow} onClick={prevSlide} />
        {
          HouseHold.map((slide, index) => {
            return (
              <div className={index === current ? styles.slideActive : styles.slide} key={index}>
                {index === current &&
                  <div className={styles.ImageSection}>
                    <img src={slide.image} alt='travel image' onClick={() => Imagehandler(current)} className={styles.Image} />,
                    <img src={HouseHold[index + 1].image} alt='travel image' className={styles.Image} onClick={() => Imagehandler(current + 1)} />
                    <img src={HouseHold[index + 2].image} alt='travel image' className={styles.Image} onClick={() => Imagehandler(current + 2)} />
                    <img src={HouseHold[index + 3].image} alt='travel image' className={styles.Image} onClick={() => Imagehandler(current + 3)} />
                    <img src={HouseHold[index + 4].image} alt='travel image' className={styles.Image} onClick={() => Imagehandler(current + 4)} />
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

export default HomeAndKicthen




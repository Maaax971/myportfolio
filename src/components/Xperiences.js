import React, {useEffect, useState} from 'react';
import { experienceList } from '../datas/Experiences';

// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import '../styles/App.css';
import '../styles/AppResponsive.css';

function Xperiences(){
    // Création d'une écoute de la taille de l'affichage pour contrôler dynamiquement le nombre de slide affichée en même temps
    
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    
    useEffect(() => {
    const handleResize = () => {
        setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
        });
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
    }, []);

    let screenSize;
    if (windowSize.width >= 1200) {
        screenSize = 3;
    } else if (windowSize.width > 600 && windowSize.width < 1200){
        screenSize = 2;
    } else {
        screenSize = 1;
    }
    // Fin de l'écoute

    return (
        <Swiper
            slidesPerView={screenSize}
            spaceBetween={30}
            freeMode={true}
            grabCursor={true}
            pagination={{
                dynamicBullets: true
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
        >
            {experienceList.map(({id, title, company, date, description}) =>
                    (<SwiperSlide>
                        <h3 className='job-name'>{title}</h3>
                        <h4 className='company-name'>{company}</h4>
                        <span className='span-date'>{date}</span>
                        {description === '' ? null : <p className='description-text'>{description}</p>}
                    </SwiperSlide>
                )
            )}
        </Swiper>
    )   
}

export default Xperiences
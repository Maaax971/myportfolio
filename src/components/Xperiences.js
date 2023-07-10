import { experienceList } from '../datas/Experiences';

// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import "../styles/Xperiences.css"

function Xperiences(){
    return (
        <Swiper
            slidesPerView={3}
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
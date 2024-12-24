/* eslint-disable react/prop-types */
import { Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import FeaturedArtifactInfoCard from './FeaturedArtifactInfoCard';
import styles from "./featuredCard.module.css";

const FeaturedArtifactCard = ({artifact}) => {
    return (
        <div className={styles.container}>
            <Swiper
               effect="coverflow"
               grabCursor
               centeredSlides
               slidesPerView="auto"
               coverflowEffect={{
                 rotate: 50,
                 stretch: 0,
                 depth: 100,
                 modifier: 1,
                 slideShadows: true,
               }}
               pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination]}
            className={styles.swiper}
            >
                <SwiperSlide className={styles.card}>
                    <FeaturedArtifactInfoCard artifact={artifact}>
                    </FeaturedArtifactInfoCard>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default FeaturedArtifactCard;
import React from 'react';
import { useTranslation } from 'react-i18next';

const Slide = ({slide: {img, title}}) => {
    const { t } = useTranslation();

    return (
        <div className='slider_slide'>
            <img className='slider_slide-img' src={img} alt="Slide"/>
            <h1 className='slider_title'> {t(`${title}`)}</h1>
        </div>
    );
};

export default Slide;
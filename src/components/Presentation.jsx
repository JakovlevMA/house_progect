import React from 'react';
import bird from '../img/Layer 0 1.png'

const Presentation = () => {
    return (
            <div className='pres'>
                <img className='img_pr' src={bird} alt=""/>
                <div className='content_pr'>
                    <h1 className='title_pr'>Реплики картин от <span className='title_sp'> Ink. House</span></h1>
                    <h2 className='description_pr'>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</h2>
                    <button className='btn_pr'>Продукция</button>
                </div>
            </div>
    );
};

export default Presentation;
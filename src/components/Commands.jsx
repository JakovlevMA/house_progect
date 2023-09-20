import React from 'react';
import people1 from '../img/man1.png'
import people2 from '../img/man2.png'
import people3 from '../img/man3.png'

const Commands = () => {
    return (
        <div className='commands'>
            <div>
                <img className='hand' src="https://live.verstaem.online/house/img/about-img.png" alt="galary"/>
            </div>
            <div className='command_box'>
                <h1 className='command_title'>Наша команда</h1>
                <br/>
                <h2 className='command_description'>Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.</h2>
                <div className='command_photo'>
                    <img className='img_command' src={people1} alt="com"/>
                    <img className='img_command' src={people2} alt="comm"/>
                    <img className='img_command' src={people3} alt="commm"/>
                </div>
            </div>
        </div>
    );
};

export default Commands;
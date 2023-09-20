import React, {useState} from 'react'
import Header from "./components/Header";
import './styles/App.css'
import Presentation from "./components/Presentation";
import NavigationsProduct from "./components/NavigationsProduct";
import Products from "./components/Products";
import NewItems from "./components/NewItems";
import Commands from "./components/Commands";
import Footer from "./components/Footer";
import BurgerMenu from "./components/BurgerMenu";
import france1 from "./img/03.jpg"
import france2 from "./img/france2.jpg"
import france3 from "./img/france3.jpg"
import france4 from "./img/france4.jpg"
import france5 from "./img/france5.jpg"
import france6 from "./img/france6.jpg"
import germany1 from "./img/ger1.jpg"
import germany2 from "./img/ger2.jpg"
import germany3 from "./img/ger3.jpg"
import germany4 from "./img/ger4.jpg"
import germany5 from "./img/ger5.jpg"
import germany6 from "./img/ger6.jpg"
import ingland1 from "./img/eng1.jpg"
import ingland2 from "./img/eng2.jpg"
import ingland3 from "./img/eng3.jpg"
import ingland4 from "./img/eng4.jpg"
import ingland5 from "./img/eng5.jpg"
import ingland6 from "./img/eng6.jpg"


function App() {

    const [isSmallScreen, setIsSmallScreen] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth >= 310 && window.innerWidth <= 420);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [activeCountry, setActiveCountry] = useState('Франция');

    const handleCountryClick = (country) => {
        setActiveCountry(country);
    };
    let items = [
        {
            id: 1,
            land: 'Франция',
            img: france1,
            name: 'Марсель Руссо',
            title: 'Охота Амура',
            description: 'Холст, масло (50х80)',
            price: '14 500 руб'
        },
        {
            id: 2,
            land: 'Франция',
            img: france2,
            name: 'Анри Селин',
            title: 'Дама с собачкой',
            description: 'Акрил, бумага (50х80)',
            price: '16 500 руб'
        },
        {
            id: 3,
            land: 'Франция',
            img: france3,
            name: 'Франсуа Дюпон',
            title: 'Процедура',
            description: 'Цветная литография (40х60)',
            price: '20 000 руб'
        },
        {
            id: 4,
            land: 'Франция',
            img: france4,
            name: 'Луи Детуш',
            title: 'Роза',
            description: 'Бумага, акрил (50х80)',
            price: '12 000 руб'
        },
        {
            id: 5,
            land: 'Франция',
            img: france5,
            name: 'Франсуа Дюпон',
            title: 'Птичья трапеза',
            description: 'Цветная литография (40х60)',
            price: '22 500 руб'
        },
        {
            id: 6,
            land: 'Франция',
            img: france6,
            name: 'Пьер Моранж',
            title: 'Пейзаж с рыбой',
            description: 'Цветная литография (40х60)',
            price: '20 000 руб'
        },
        {
            id: 7,
            land: 'Германия',
            img: germany1,
            name: 'Курт Вернер',
            title: 'Над городом',
            description: 'Цветная литография (40х60)',
            price: '16 000 руб'
        },
        {
            id: 8,
            land: 'Германия',
            img: germany2,
            name: 'Макс Рихтер',
            title: 'Птенцы',
            description: 'Холст, масло (50х80)',
            price: '14 500 руб'
        },
        {
            id: 9,
            land: 'Германия',
            img: germany3,
            name: 'Мартин Майер',
            title: 'Среди листьев',
            description: 'Цветная литография (40х60)',
            price: '20 000 руб'
        },
        {
            id: 10,
            land: 'Германия',
            img: germany4,
            name: 'Герман Беккер',
            title: 'Яркая птица',
            description: 'Цветная литография (40х60)',
            price: '13 000 руб'
        },
        {
            id: 11,
            land: 'Германия',
            img: germany5,
            name: 'Вульф Бауэр',
            title: 'Дятлы',
            description: 'Бумага, акрил (50х80)',
            price: '20 000 руб'
        },
        {
            id: 12,
            land: 'Германия',
            img: germany6,
            name: 'Вальтер Хартманн',
            title: 'Большие воды',
            description: 'Бумага, акрил (50х80)',
            price: '23 000 руб'
        },
        {
            id: 13,
            land: 'Англия',
            img: ingland1,
            name: 'Пол Смит',
            title: 'Дикий зверь',
            description: 'Акварель, бумага (50х80)',
            price: '19 500 руб'
        },
        {
            id: 14,
            land: 'Англия',
            img: ingland2,
            name: 'Джон Уайт',
            title: 'Скалистый берег',
            description: 'Цветная литография (40х60)',
            price: '17 500 руб'
        },
        {
            id: 15,
            land: 'Англия',
            img: ingland3,
            name: 'Джим Уотсон',
            title: 'Река и горы',
            description: 'Акварель, бумага (50х80)',
            price: '20 500 руб'
        },
        {
            id: 16,
            land: 'Англия',
            img: ingland4,
            name: 'Юджин Зиллион',
            title: 'Белый попугай',
            description: 'Цветная литография (40х60)',
            price: '15 500 руб'
        },
        {
            id: 17,
            land: 'Англия',
            img: ingland5,
            name: 'Эрик Гиллман',
            title: 'Ночная рыба',
            description: 'Бумага, акрил (50х80)',
            price: '12 500 руб'
        },
        {
            id: 18,
            land: 'Англия',
            img: ingland6,
            name: 'Альфред Барр',
            title: 'Рыжий кот',
            description: 'Цветная литография (40х60)',
            price: '21 000 руб'
        },
    ]
  return (
    <div className="App">

        {isSmallScreen ? (
            <>
                <BurgerMenu/>
                <Presentation/>
                <NavigationsProduct activeCountry={activeCountry} onCountryClick={handleCountryClick}/>
                <Products items={items} activeCountry={activeCountry}/>
                <NewItems/>
                <Commands/>
                <Footer/>
            </>
        ) : (
            <>
                <Header/>
                <Presentation/>
                <NavigationsProduct activeCountry={activeCountry} onCountryClick={handleCountryClick}/>
                <Products items={items} activeCountry={activeCountry}/>
                <NewItems/>
                <Commands/>
                <Footer/>
            </>
        )}
    </div>
  );
}

export default App;

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
            img: 'https://s3-alpha-sig.figma.com/img/fa91/bf9e/3004b7d8a3c0e2de1caa8fd5732848be?Expires=1694390400&Signature=lJCMX-qy9pWmWXnQOIurQyF8lSuCnQxqeRnRIqZi5oNv9rB7mAyRVm4JAVbXXCV3iH7mavtHII0O66UGYM7rvN~GgEMUdbGV6wsAr8jzJN6MgtmMviB~WOWdcqvlUBm~lJTf72ZhUIM-2SJTX~mHjrD8mKVS7wjvehIPqkcnoMf968r7QNuWKUmWWnDHiE6cqjkfv8b3YAN6pweK7reTDJdIkcLwMsu-ZbmGAsTAPsgPfEXbNTlJaTdeV6g-MhobHA3ycL7f9Va7~XrQRCKm1k4n3TTaJd4lirDbl-iRrLhwaE2JE4APToFF1ivnLEicH4EbnnCrYvP1yn00XZ-uzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Марсель Руссо',
            title: 'Охота Амура',
            description: 'Холст, масло (50х80)',
            price: '14 500 руб'
        },
        {
            id: 2,
            land: 'Франция',
            img: 'https://s3-alpha-sig.figma.com/img/15e2/7662/749f524a689260200e0563fdf7e7d013?Expires=1694390400&Signature=n0EUS~yoJfCU58dNJmAlCO38icQtpobfHouH1bjQDgITDC82iD7qDcWrrA5pumyt99GUDyocyc8EzfrXQfGa4x9H7a3djel3xdZ86XOgll4HQri8wukuLEDmag9wWjqiFFEPcXWU~ORvJD56c1OdnmWUFvh0L3t0FaLzCECDhYk-uBhR8r~vp5zHL13ur~1NsyUYi2Wgf2l2MCyle4X3rXPQEqNs3bOugh3lJ0EKsmGcG4~2KD05hSDn8bHkEWPA6Kta5hXEWXwnOs-aZS1wCMG9bwwvLqe510pFYq6PGOIYZEk7ug9~TNPB50HyocrDvY6Kg8o2~acDUQLFM9-Rtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Анри Селин',
            title: 'Дама с собачкой',
            description: 'Акрил, бумага (50х80)',
            price: '16 500 руб'
        },
        {
            id: 3,
            land: 'Франция',
            img: 'https://s3-alpha-sig.figma.com/img/8259/612e/ab708c86c2084b45ede2e5b47f32f0ae?Expires=1694390400&Signature=igCLkxSpkZFJpxAZTs77nU7CuDrqLDvbVnRPVO95fFlzMvuF0QC-jhgd35ZSlhWXcN18m76YQCrS7JToaSPvtWx5twHUFTO3n2nk9CmSXWi5pdzZfUbYUeu-jV63GR6XFNi2xdoxyEs~sLe6EKVHU3feIk9NOcmO7nzw2Gckwzb1ZL7~-u~ejsZENWdxJbm~WE3kVov58z4woPsH9oWd6xxE3qLhKB~wvuZBOers1tLvOo1u5EoTpTN9HuRHl2~ysnZj9abY57dkeg6tkBvJbLsmdRCiHiRthwi-bm5zqwwfoKPDJuuRH7HQigyiU2cTyYEugd3Li4QKxWF0MaLzow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Франсуа Дюпон',
            title: 'Процедура',
            description: 'Цветная литография (40х60)',
            price: '20 000 руб'
        },
        {
            id: 4,
            land: 'Франция',
            img: 'https://s3-alpha-sig.figma.com/img/53e8/b467/38c4dea3c32614513f30d586b23e623e?Expires=1694390400&Signature=MIPCkSuWnpePvJUa~Ip4qxHdrTExZFzzfWn6q2~YZ0R2wJa9kP2sIH~NqAkuNW0YFMEkw~8vcERGPKaur~BX4LszqdXO7jC7Y-Z6smu5DjmiEX8QVUEoXrQF0sFki951CyWP7X60LaB-eEeO-qadoViUNg-nY2z4hEBx9B5tjWpmNMLBa52vd2B5FMJKkYBPA3hT7qwYJd9sjj~~j4-Jjwz3axxbdVJDA4udjzeKsBzl1WZCwRJD6G1N9lZZlt1cVxavZsOihLxZO11YJ8XsBHf74lwy3UO701WPTiUNjBC6E9ENxy6E64LA4Im60Ihl82VypttDl4UADrA8O1ehRQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Луи Детуш',
            title: 'Роза',
            description: 'Бумага, акрил (50х80)',
            price: '12 000 руб'
        },
        {
            id: 5,
            land: 'Франция',
            img: 'https://s3-alpha-sig.figma.com/img/044c/aca3/2bf109bb1a75d2ec01ef08204231eeaa?Expires=1694390400&Signature=Q5-E43ha1EP693fv8f~zR-3AwYoQRtsUFiyLASYtqPGymxHqCKk~HQ37KLDyvDbZGGUVb7r2jFtDxCRf2yXnB1JlBAtFgasLgBz44ohg4PksEzCyDrHId7EA24ulBLnWZxI3c8nyrIzUUf1sXoEhSeb8lqez3WBDfx22ul3eGo-dZ-rtXe0gbrhzJ69vwJkoru3TrpWJcG9KTXamuVmXMGrtE7pPh7Gk-OInchRT-LyvX4pk6yBuKI9unQkke9g666E1x-At9OT9ng0mgEmTbMZM00VhIR8yHesMjE0b4F7I5pp2j02W~FLroa6o4wyp~X4cVFVdjDkf5Z2kL6jxvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Франсуа Дюпон',
            title: 'Птичья трапеза',
            description: 'Цветная литография (40х60)',
            price: '22 500 руб'
        },
        {
            id: 6,
            land: 'Франция',
            img: 'https://s3-alpha-sig.figma.com/img/f32f/888e/e10b4d96d2acd08463a8d8a2887f353f?Expires=1694390400&Signature=DIwPD5zVHlsPpRaad8Hr67taww6IIxV12xAxrF0~66STZuHudIxsq30pzh6Nfm2L1sDZsGI1wr2-r1CNUjDfi9ZBnUlv4t4OAdDh7yHyqcZeKJ2uIty4HoFbuUKPPrVXJ25lngeP6KcG7jNYXwR4czaK~QNWBCP525lI3kWwhZvOP3zkTTVPpNFFNkmrAJmc9P41Gn5g7cA4BGbPCHkjIC8QFlP5bpKOCahh22N4jdiLFbYbqkZENEJr0LtRkJjDz2fSMm47JabkrHm9kCvX3XyuA1h-KADomohVDArx8yASVGamWIgu2Holb3ytcl-Den-A1Jcfoap-nkKIvq5WHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Пьер Моранж',
            title: 'Пейзаж с рыбой',
            description: 'Цветная литография (40х60)',
            price: '20 000 руб'
        },
        {
            id: 7,
            land: 'Германия',
            img: 'https://s3-alpha-sig.figma.com/img/a6c7/9940/4f73924bb0c90cdf2e970644fe396ee3?Expires=1694390400&Signature=fXeSwJ7YxpygmMMjRMO3lceBZOhUh-lPig8bVPKkox~WH~hAdcbLD9OpuSpecT1iQNKUvDHYT0xbp7~xr56UY-kRuSX6T76xpRPqHt5ZiJekPLxuiaTGvaSFkejIG2w2O2128MROIrohnY6xrJZBGn0L33moZn9c0WQ8BCrWZLAoF5abPWe8L3dZtafs0dfcM4HuA2f1zmrLx4u6sqP7vNg6tqXDe9wFVXVCIPYmGhT4tybRFeqWv1PQcYZSn4PCJfeMcDAGalTSVXtOVUbpsxUQXorGZ7IbqWqVybKwFguRAeNVhO1Yo6zma9ZG~xjp43Uxq5bPHq2NKBuiEBhcOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Курт Вернер',
            title: 'Над городом',
            description: 'Цветная литография (40х60)',
            price: '16 000 руб'
        },
        {
            id: 8,
            land: 'Германия',
            img: 'https://s3-alpha-sig.figma.com/img/211c/2675/cb73e86ce142f31eef060e73fab015ed?Expires=1694390400&Signature=aeSuPsAifFQXWq9bSSjAv5yH2F3HWcQ6NoYWC9mFhpqNArhP-WapFKxY1Zpaa-br7K4qIauYwpDOmmJlWSBnKAc-RZwnloYmRHXQCDHJK814N5ZucmssNj9BR1JnNYSSHaStZHwxsZduscnTrNKT3kStbdiRDsFNTMy6h7llH1beltLm1P9-QAl-MV4IyHSDTcaAb3Fhlgb3NMcopFcur7KDGDZfsOlWWn6aTfPpVu~enHGVJ611PJxORvqEmPlTBXPbJI~V26CdHuY6kB9kRjGJzG8Se~0jjSmy4m-bkAIj-MA4JUz04e~ckJcn9t4fvknOk2fs-wXBXUfmKsM7hg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Макс Рихтер',
            title: 'Птенцы',
            description: 'Холст, масло (50х80)',
            price: '14 500 руб'
        },
        {
            id: 9,
            land: 'Германия',
            img: 'https://s3-alpha-sig.figma.com/img/7a2e/1a8d/578ac4903f929794d471e0324cb43d27?Expires=1694390400&Signature=AMBxeLS2-5kS1rXB1dbVYiosAomy2S8ZRFTUxWRSPSpKGY6~fiLkRNduy4Kj6qLP4vMmJL8o-B8NSlsLNdn0Gtyfc45chBRMJEl92M8D6tLSKyYRdqLUN9SiELF0M5ldrs786rXFQsyUl0rYAat1~RVxZTOp05Kl6mi5kCvNZflLMS5cosV7i2BsoH2ZRzu2V-LhlJH09YMXEVp-gggcwytNg-Y1BWB3vmwOsqs5eeyfsCx19-aIellikcgyg7JPxA10YeW5FjuKq0zPm1qhlIv6IWgg0D4vOR3VhD1h6FTJfd-9DZbWY3XquRGWiv~VTHckZV4Az5igGZe4SbT7IA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Мартин Майер',
            title: 'Среди листьев',
            description: 'Цветная литография (40х60)',
            price: '20 000 руб'
        },
        {
            id: 10,
            land: 'Германия',
            img: 'https://s3-alpha-sig.figma.com/img/b4bf/a4d3/d79c7a68581f473df0765022dc781c14?Expires=1694390400&Signature=oZo2OMsHOBh4IpYkc8FlvW2OUNxBJyV8AtvLI6flT8SkvayVp0iCv2hDipIC0N09~-n7yxKF07vZhUbcrUDHE8AkiRRipYwi3XyP4yJIm-flnMKoATomYzX8QjXqqYt1iJtFfCbGea9ro-xb3id9iuBAtBT~IMel8edKYvgqgIW2DUFn6zA6FhdYoajvqV2TELQlCr9a~EfeeELf9NPifqR5LjFsqfhYsMUWpy1Gr6p4ZLCqaG1padT7ESdE4e0Wmjqajjx1BSTAHL2e5vtuzPQqayPU~eu6s7bYdQFt5r7zDl14ffbmsMYcTXF36Axe47wAB11AyeCQviW4Xwmq1w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Герман Беккер',
            title: 'Яркая птица',
            description: 'Цветная литография (40х60)',
            price: '13 000 руб'
        },
        {
            id: 11,
            land: 'Германия',
            img: 'https://s3-alpha-sig.figma.com/img/4215/0404/ad8db6da8983895427ddb4ec9e940dfe?Expires=1694390400&Signature=eGyWQyu~9wWBaJRyCv1uxjUq2-lV0C8jqcFQxjOIdqQ0uKDPfhdzlwSnu3UbCUA-EyeLhnE0FGFBSNGezDFac3zDRKOBMWjZvYgdv5C0Tf3HLzB2DtzE0MC78pDQiEI2DTXBsyTAwN05XTSr3~nQF6Me4o0z4JWnbL3sqBrWMPCzrL3vVa8~LAKEWywRCXcm0nUUp~4JjSV5QN2xJTv3-5Q~b6As8Tek3p60TiLoEylZ-wPb--vbuxP6d1f0~tiSe-YT~FRp56MorTm-~4Ypnsp3~rXo1AZ8Udi3GBiKG75sUmfugvxq~BM0mnmnn78yRVU3RL1BMqpb86T5D9pB-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Вульф Бауэр',
            title: 'Дятлы',
            description: 'Бумага, акрил (50х80)',
            price: '20 000 руб'
        },
        {
            id: 12,
            land: 'Германия',
            img: 'https://s3-alpha-sig.figma.com/img/60ce/4ee3/e3d4ee4fc86110526759a5a226b1001d?Expires=1694390400&Signature=U2R3fbNo1GbR6vnl5kxh2H0xxI1Yg-Ugw6wuPN2hj6anSU54oYuEcjpA6V99hdrL28q2i3UoC8LnDUtLxfSURYg1zD8XSY-TguFcNuCDk6YCW7~a~eUn~cCLECzBN0ew90CcPRniIGl8rydjQ36PlLhdjiQEWcR3-~nUUR2sgyvkrsZNhD1B8OTyojS2XZ32LoOdQRyBiaO-8HcEhLA-uYWxstyUgNQUBi3UT8WksX3STws0tLAYkZi3WhsDdkOLyOv1S8i2aTvZObBUDUXgxv3G~IY4gzwX0JkKZYbDZ0hQqbT4Q-c4VXOhWft7uB1kFSUvQOdzX73Sh5TRGNgxbw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Вальтер Хартманн',
            title: 'Большие воды',
            description: 'Бумага, акрил (50х80)',
            price: '23 000 руб'
        },
        {
            id: 13,
            land: 'Англия',
            img: 'https://s3-alpha-sig.figma.com/img/4fec/11f0/e3145fbf52f5d2ec9c57e9a216443cc8?Expires=1694390400&Signature=Z5yGb~l4kjwXvRFr0IWO7UYXepONwOX71x1kcl9J~iGU70Y42XtYO-xE8w0vYXY3CzOf0uTW1CCBa5x3ixKQYHxA0iRvd-ZVtTTmKToGZ7ewR2zuDEELouJZQjuciHsS7WrdgCsbZ7K4Ebdg1vJNNXFRFm1X9U9YWXWR-pY7T-cuKxSrGhpIN3MQWvgHjwiR8YQOfOEwZXqWmH~YdyoMP0GherjxuseLppGhaCi80lxH8ke3RWcnLyALl3f8tSubQG71aEPUMUqjDWd8IQVOQTVmknszxe0A0lnA9Fm~SjhYiKY53QVrJ2zWwX5hqmcyensWN4MR0bqkMGHkZpllZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Пол Смит',
            title: 'Дикий зверь',
            description: 'Акварель, бумага (50х80)',
            price: '19 500 руб'
        },
        {
            id: 14,
            land: 'Англия',
            img: 'https://s3-alpha-sig.figma.com/img/13fa/c4c2/adff234dd26b1115cc67b05b5e6bc7c2?Expires=1694390400&Signature=dtAIPPAPa5bfcHqztjyv~TiVZUN1Vcw7hyhNSVogBywTWjxaWEDop2vZpzZotApPYkgV-2Y-paGHWAKXkQTxFA7ZXwARpFCzTuj3UQz5vTXOuTQUDL-Gbq5YG8qvLSlQKC4Zsdmf1uizfkUWbmIJwMA4vgHEHLReqDdAPIyd7N7pzoBI7k7-F9dh5p-1pDKSCNiHNC4~6HNZcGchVBLhh1gvk07X5O6y20tytwAXPjplYZ55Exv2aKhauHzGZZ4uhcFtTTqs15O9jxSsgqUwqU4Ui8AkLQ9oO8mZzEwMudCvrJ6twZS1K-eQfPb833vMKxm~h95PvzTI42Cq5a1K~Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Джон Уайт',
            title: 'Скалистый берег',
            description: 'Цветная литография (40х60)',
            price: '17 500 руб'
        },
        {
            id: 15,
            land: 'Англия',
            img: 'https://s3-alpha-sig.figma.com/img/5543/ba48/430dba8575747667e7f970b6df2bcdd0?Expires=1694390400&Signature=g4HYxpIkyoXzr2bjGQYUzE9VztafuixW~ERqaUBIgPy1wAzkNz3t~uXAn5nWp9LovOATjXKYBOH5ULyeoCqEKTaOoBe~9uj9N7GAWvnM2Pcn-OV-PqcnKP7z6ZzbeWaMJNcdXjGzTC5~y0lY8QrE-r1666Efem6RJc1nku7Rwtr6aQqzx3GJe8oopxUavyRuockpsZWCNe4Fty5VyK7ErJhrgFjnjCjfK9ykvGJHsvoAqlwdyE3fdHMxK3lhOfVc3ml~g1X3w9iTm7kFvxFhL1~t7KNkMezgRIXJBguMMhHJz3CYYwOROoBO8wAoRtee39D0xkP-71rfTfcVTwLpfA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Джим Уотсон',
            title: 'Река и горы',
            description: 'Акварель, бумага (50х80)',
            price: '20 500 руб'
        },
        {
            id: 16,
            land: 'Англия',
            img: 'https://s3-alpha-sig.figma.com/img/bb61/d403/9d94ef4de5aae2bb120fb79498a032f0?Expires=1694390400&Signature=SokuzGZBKDlIdmY7~HrHQwwuL1hLG6whavtw4S-dqfcSQu1RgByyWlFXd69~LoRnnTXrc9KtE9J74qVQg-Zv86JdNBZ~q5LRDzMgI5DL3Byn-AFlwf~96eZBM2i9g5dx07fju5SCii75xYazs3I6XdSZUxdxIm4MIO0Km1Hqai9L1vxjc~~SYI0g5ztu93ZhwMCAPprk3nJvMFuZWKuT3-6B-MUiY-bpg49JDbTeemm4vewscEOvoDyDYBGSQ4XHTtoeTMlogunPlurZkknscciMwAiF~Z0iq4kBjVltUW4jS-IpHFVlangSEVXrRM7rlY3L5-UsoCqpWlDfdzCjug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Юджин Зиллион',
            title: 'Белый попугай',
            description: 'Цветная литография (40х60)',
            price: '15 500 руб'
        },
        {
            id: 17,
            land: 'Англия',
            img: 'https://s3-alpha-sig.figma.com/img/327e/9d09/20d16daba3a87333803606240e870a93?Expires=1694390400&Signature=Ia3RVF2J4daf9dt3x41bARDWiMIzYj2qcVrJLC5~Vts6RDV7W~cmqQaK6Zs1-lEjJQqj9LmIpflW5kUnUClH1DAHOu8Js6REVcMm-308z~NbOAI-cS6zOF~n9TiBcbMB-Bu2y16026kUdP-9x9AZcuiGXrCsdywnA8cEBA5ZhwMoCReQXWj~vcV0YVdD9YqUVWtp0ES50xkdrwRx3r5aNqGNvxn2Bn8L~4TjCeNTmRKBHVds5Mg5MRl4YaR~boxj-R~n~iWIIzu0T6SFTxpH3r6WrR52LTvQyJnm-9FM56v-Vf5yq69TBDTxILJVcw1Bygj5pZzOUuCUFWy89l3ptw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
            name: 'Эрик Гиллман',
            title: 'Ночная рыба',
            description: 'Бумага, акрил (50х80)',
            price: '12 500 руб'
        },
        {
            id: 18,
            land: 'Англия',
            img: 'https://s3-alpha-sig.figma.com/img/df6c/dc5d/cd608cebc48442df833464d8cb8177d5?Expires=1694390400&Signature=MUY0cDZRL1tGyEnjyjdtITuubs-3OL04i2kHhe3uHpdNoB0poYUkl6qQ8FrtfEN4UQ9lovb9B6Wamy78FDOykzPZSjhuTGdeHMVSozSqMLG38aFiohjb0Njs2w8o3kC8~1uG-SVCapanse9jNlM5IHbbEFE0~TrBXKDk-qts1jwVWLkX4GVJaPKTtSorg8fzKir49LjK-3PMaF43iMrgtrGnbQrfdED67~aGaFultTGWm0sO23j7UH65TEPcilC1M~rxKscZWmKxRA-aW92ycGL36JgpuOO-UV1A4tcPwZM08lgaxsVHVjPjvDaIVo2ujY-CfSucNSpWbfI53WbbTA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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

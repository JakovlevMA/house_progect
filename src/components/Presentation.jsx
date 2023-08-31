import React from 'react';

const Presentation = () => {
    return (
            <div className='pres'>
                <img className='img_pr' src="https://s3-alpha-sig.figma.com/img/b6bb/3e01/767b0d204fdcdde61134fd1d03c4e51a?Expires=1694390400&Signature=iHBLEACvBeMIbBjBqInengOmj2RvrVcSXexWmoL5ogE~wbc6f3K2jEbvNPq680cxgZLBmLq7Q7vRlL2PiuW3jYLCTHEAB~2IT8e9jzc~tcU6oKNuQGKrZcGvEm6NMt7rZExQgjsKNXKhsExsbbAYBqqzo4YjsH5q98VJjjSeg1bIf~WBY8M9~qiuoHsQIZ3ChZPCwLX5AxuMhD1lR1vhxZh~80Cq-ybpjFEj8r~3kLLvx8ygiPUZxnyt2jHxA7QFOQGD6FTDrd9FlFNRtaMb9E2SFe7iQKUGLXUb2XH65Y~FmqTHsAzNKH1YyiR88hC~XKErCv90p4hqDzp7BZoxJg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt=""/>
                <div className='content_pr'>
                    <h1 className='title_pr'>Реплики картин от <span className='title_sp'> Ink. House</span></h1>
                    <h2 className='description_pr'>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</h2>
                    <button className='btn_pr'>Продукция</button>
                </div>
            </div>
    );
};

export default Presentation;
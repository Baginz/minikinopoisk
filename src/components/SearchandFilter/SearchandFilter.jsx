import React, { useRef, useState } from 'react'
import MyButton from '../UI/button/MyButton';
import MySelect from '../UI/select/MySelect';
import './SearchandFilter.css'


const SearchandFilter = ({ setQuery, setPage, setLanguage, year, setYear, adult, setAdult }) => {
    const [state, setState] = useState('ru');

    const inputRefSearch = useRef();
    const inputRefYear = useRef();

    const submitHandler = event => {
        event.preventDefault();
        if (inputRefSearch.current.value) {
            setQuery(inputRefSearch.current.value);
            setPage(1);
        }

    }

    return (
        <>
            <form onSubmit={submitHandler} style={{ textAlign: "center" }}>
                <input className="home-inp" placeholder="Введите название фильма" type="text" ref={inputRefSearch} />
                <MyButton>Search</MyButton>
            </form>
            <div className="filter">

                <div>
                    <p style={{ textAlign: "center" }}>Язык</p>
                    <label >
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='Ru'
                            onChange={() => {
                                setState('ru')
                                setLanguage('ru')
                            }}
                            checked={state === 'ru'}
                        />
                        <span>RU</span>
                    </label>
                    <label>
                        <input
                            className='with-gap'
                            name='type'
                            type='radio'
                            data-type='en-US'
                            onChange={() => {
                                setState('en-US')
                                setLanguage('en-US')
                            }}
                            checked={state === 'en-US'}
                        />
                        <span>US</span>
                    </label>
                </div>
                <div>
                    <p style={{ textAlign: "center" }}>Include Adult</p>
                    <MySelect
                        value={adult}
                        onChange={setAdult}

                        options={[
                            { value: true, name: 'yes' },
                            { value: false, name: 'no' },
                        ]}
                    />
                </div>
                <div>
                    <p style={{ textAlign: "center" }}>Год выхода</p>
                    <MySelect
                        value={year}
                        onChange={setYear}

                        options={[
                            { value: '', name: 'Любой' },
                            { value: 2020, name: '2020' },
                            { value: 2019, name: '2019' },
                            { value: 2018, name: '2018' },
                            { value: 2017, name: '2017' },
                            { value: 2016, name: '2016' },
                            { value: 2015, name: '2015' },
                            { value: 2014, name: '2014' },
                            { value: 2013, name: '2013' },
                            { value: 2012, name: '2012' },
                            { value: 2011, name: '2011' },
                            { value: 2010, name: '2010' },
                            { value: 2009, name: '2009' },
                            { value: 2008, name: '2008' },
                            { value: 2007, name: '2007' },
                            { value: 2006, name: '2006' },
                            { value: 2005, name: '2005' },
                            { value: 2004, name: '2004' },
                            { value: 2003, name: '2003' },
                            { value: 2002, name: '2002' },
                            { value: 2001, name: '2001' },
                            { value: 2000, name: '2000' },

                        ]}
                    />
                </div>
            </div>
        </>
    )
}

export default SearchandFilter

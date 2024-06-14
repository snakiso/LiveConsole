import {useEffect, useState} from "react";
import {Data} from "./services/types.ts";
import {Form} from "./components/form/Form.tsx";
import './app.scss'

export function App() {
    const [data, setData] = useState<Data>([])
    console.log('render')
    const getData = async (): Promise<Data> => {
        const response = await fetch('/data.json');
        return response.json();
    }
    useEffect(() => {
        getData().then(response => {
            setData(response)
        })

    }, []);

    return (
        <>
            <div className={'title-block'}>
                <h1 className={'title'}>Управление трансляциями</h1>
            </div>
            <div className={'forms-block'} >
                {data.map(el => {
                    return (
                        <Form data={el} key={el.PLACE}/>
                    )
                })}
            </div>
        </>
    )
}




import styles from './Inicio.module.css';
import Banner from 'components/Banner';
import Card from 'components/Card';
import { useEffect, useState } from 'react';
// import videos from 'json/db.json';


function Inicio() {

    const [videos, setVideos] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch ("http://localhost:3001/videos")
                const data = await result.json()
                setVideos(data)
            }
            catch (err) {
                console.log(err)
            }
        }
        
        fetchData()
        
    }, []);
    
    return (
        <>
            <Banner />
            <section className={styles.main}>
                
                {videos.map((video) => {
                        return <Card {...video} key={video.id}/>
                    })}
                
                {/* provavelmente, teremos que pegar o valor dos inputs,), colocar no json, e fazer um card com eles. ai exbir os cards aqui. */}
            </section>
        </>
        
    )
}

export default Inicio;

import styles from './Inicio.module.css';
import Banner from 'components/Banner';
import Card from 'components/Card';
import { useEffect, useState } from 'react';
import NovoVideo from 'pages/NovoVideo';
// import videos from 'json/db.json';


function Inicio() {

    const [videos, setVideos] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch ("https://my-json-server.typicode.com/luckfer7/aluraflix-api")
                const data = await result.json()
                setVideos(data)
            }
            catch (err) {
                console.log(err)
            }
        }
        
        fetchData()
        
    }, []);

    const handleDelete = (id) => {
        // Atualize a lista de vídeos após a exclusão
        setVideos(videos.filter(video => video.id !== id));
    };

    
    return (
        <>
            <Banner />
            <section className={styles.section}>
                <h2 className={styles.videosVideos}>VÍDEOS</h2>
                <div className={styles.videosContainer}>
                    
                    {videos.map((video) => {
                        return <Card {...video} key={video.id} onDelete={handleDelete} />
                    })}
                </div>

                
                {/* criar um overlay de form com dialog e, provavelmente, traze-lo pra cá (pra depois do section);
                fazer a requisição put ou post para ligar esse forma ao json;
                , fazê-lo aparecer quando se clicar botão de editar, e alterar o video. */}
                
            </section>
        </>
        
    )
}

// onEdit={handleEdit}
export default Inicio;
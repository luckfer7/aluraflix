import styles from './Banner.module.css';
import ImgBanner from './player.png'
function Banner () {
    return (
        <div className={styles.background} >
            <div className={styles.container}>
                <div className={styles.containerTexts}>
                    <a className={styles.TitleCategory}>FRONT END</a>
                    <h2 className={styles.Title}>SEO COM REACT</h2>
                    <p className={styles.text}>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </p>
                </div>
                <img className={styles.imgBanner} src={ImgBanner}></img>
            </div>
            
        </div>
    )
}

export default Banner;
import NavBar from '../NavBar/navbar'
import styles from './hero.module.css'

const Hero = () => {
    return (
        <section id={styles.hero}>
            <div className="container max-w-6xl mx-auto px-6 py-12">
                {/* menu/logo container */}
                <NavBar />
                
                <div className="max-w-lg mt-32 mb-32 p-4 font-sans text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
                    Imperssive Experiences That Deliver
                </div>
            </div>
        </section>
    )
}

export default Hero
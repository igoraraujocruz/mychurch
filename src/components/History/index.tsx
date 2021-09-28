import styles from './styles.module.scss'
import Image from 'next/image'
import adore from '../../../public/images/adore.jpeg'

export function History () {
    return (
        <>
        <div className={styles.container}>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid sed quisquam impedit a, harum natus porro esse, velit quod molestias nisi eius! Error ab numquam perspiciatis consectetur, illum delectus quisquam?</p>
            <section>
                <Image src={adore} alt="Picture of the author" />
            </section>
        </div>
      </>      
    )
}
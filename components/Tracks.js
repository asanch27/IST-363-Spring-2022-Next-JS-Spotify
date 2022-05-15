import Heading from './Heading'
import styles from './tracks.module.scss'
import Paragraph from './Paragraph'

function convertDuration(duration) {
    const minutes = Math.floor(duration / 60)
    const seconds = duration % 60
    const formattedDuration = `${minutes}:${seconds}`
    return formattedDuration
}

const Tracks = ({items}) => {
  return <ul className={styles.tracks}> 
        {items.map((item,index )=>{
            return <li key={index} className={styles.trackItems}>
            <h3>{title}</h3>
            <Paragraph>
                {convertDuration(songInformation.duration)}
            </Paragraph>
            </li>
        })}
    </ul>
}
export default Tracks;
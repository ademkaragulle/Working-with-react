import React from 'react'
import { DateComing} from './propstypes'




function Home(props:DateComing ) {
    return (
        <div>
            {props.name} Eğitimine Hoş Geldiniz. Kurs Sayısı: {props.courseNumber}
            {props.isBest ? <p>En iyi react eğitimi bu eğitim.</p>:''}
        </div>
    )
}

export default Home
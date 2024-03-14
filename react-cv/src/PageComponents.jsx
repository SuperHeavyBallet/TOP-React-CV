
import InfoCard from './InfoCard.jsx'
import AddNewCard from './AddWorkExperienceCard.jsx'
import AddNewEducationCard from './AddEducationCard.jsx'



export default function PageComponents()
{
    return (
        <div className='container'>
            <div className='column-1'>
                <InfoCard/>
            </div>

            <div className='column-2'>
                <AddNewEducationCard />
            </div>
            
            <div className='column-3'>
                <AddNewCard />
            </div>
            
        </div>
    )
}
import { FamousUsers } from './interface';
import * as C from './style';
import { FaInstagram } from 'react-icons/fa6';


const Card: React.FC<FamousUsers> = ({followers, imageURL, name, id}: FamousUsers) => {
  return (
    <C.Card className={`famous-user-card card-${id}`}>
      <C.CardImg src={imageURL}/>
      <C.CardContent>
        <h5>{name}</h5>
        <div className='flex items-center gap-2'>
          <C.ViewProfileBtn>View Profile</C.ViewProfileBtn>
          <div className='flex items-end gap-2 followers-box'>
            <FaInstagram color='#ffffff' size={22} />
            <span>{followers} Followers</span>
          </div>
        </div>
      </C.CardContent>
    </C.Card>
  )
}

export default Card

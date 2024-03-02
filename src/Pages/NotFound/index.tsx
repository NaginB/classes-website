import React from 'react'
import * as S from './styles';
import { Link } from 'react-router-dom';


const NotFound: React.FC = () => {
    return (
        <S.Notfound>
            <p className='text-base'>Page Not Found</p>
            <Link className='text-blue-700 underline' to='/home'>return to home</Link>
        </S.Notfound>
    )
}

export default NotFound

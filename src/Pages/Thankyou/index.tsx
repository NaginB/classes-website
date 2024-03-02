import * as C from './styled'
import Logo1 from '../../Assets/Images/FanxoDark.svg'
import Logo from '../../Assets/Images/logo-colored.svg'
import { useState } from 'react'
import { ColoredBtn, CommonButton, CommonInput } from '../../common-styles'
import { GoLink } from "react-icons/go";
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { FaThreads } from 'react-icons/fa6'

const Thankyou = () => {

  const [termsCond] = useState<string[]>([
    'fanxo requires a minimum of 5000 followers across all socials.',
    'fanx creators must be 16 years or above of age.',
    'fanxo creators keep 90% of their earnings.',
    'Content suggesting child or minor abuse is not allowed.',
    'Identity verification and bank account connection required for payment processing.',
    'Working with a talent agency? Email us at talent@fanxo.club to expedite this process.'
  ])

  return (
    <C.ThankyouWrapper>
      <C.Content className='min-h-screen flex items-center justify-center flex-col'>
        <img src={Logo} alt="fanxo logo" className='app-logo mx-auto' />
        <h1 className='text-white text-center font-roboto text-2xl mt-5'>Thankyou For Applying</h1>
        <p className='text-white text-center font-roboto leading-7 pb-8 pt-4'>Your application has been received. It is under process and will be activated by the fanxo talent team shortly after due diligence. An email will be sent to your registered email address once the activation process is complete. After activation, you can log in with your credentials and access the special creator account and begin earning on fanxo.</p>
        <div className="text-center">
          <ColoredBtn className='!px-14 text-white'>Return Home</ColoredBtn>
        </div>

      </C.Content>
    </C.ThankyouWrapper>
  )
}

export default Thankyou;

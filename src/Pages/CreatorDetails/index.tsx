import * as C from './styled'
import Logo1 from '../../Assets/Images/FanxoDark.svg'
import Logo from '../../Assets/Images/logo-colored.svg'
import { useState } from 'react'
import { CommonButton, CommonInput } from '../../common-styles'
import { GoLink } from "react-icons/go";
import { BsInstagram, BsYoutube } from 'react-icons/bs'
import { FaThreads } from 'react-icons/fa6'

const CreatorDetails = () => {

  const [termsCond] = useState<string[]>([
    'fanxo requires a minimum of 5000 followers across all socials.',
    'fanx creators must be 16 years or above of age.',
    'fanxo creators keep 90% of their earnings.',
    'Content suggesting child or minor abuse is not allowed.',
    'Identity verification and bank account connection required for payment processing.',
    'Working with a talent agency? Email us at talent@fanxo.club to expedite this process.'
  ])

  return (
    <C.CreatorWrapper>
      <C.CreatorDetails>
        <img src={Logo} alt="fanxo logo" className='app-logo mx-auto' />
        <h1 className='text-white text-center font-roboto text-2xl mt-5'>Creator Application</h1>
        <ul className='mt-6'>
          {termsCond.map((trm, ind) => (
            <li className='text-white list-disc font-roboto mt-4' key={`terms-cond-${ind}`}>{trm}</li>
          ))}
        </ul>

        <div>
          <div className='flex gap-4 items-center mt-5'>
            <span className='text-white'>@</span>
            <CommonInput size={20} />
          </div>
        </div>

        <div className='mt-6'>
          <h3 className='text-white'>Top Social Platforms</h3>
          <div>
            <div className='flex gap-4 items-center mt-4'>
              <BsInstagram size={20} className='text-white' />
              <CommonInput  placeholder='Instagram'/>
            </div>
            <div className='flex gap-4 items-center mt-4'>
              <BsYoutube size={20} className='text-white' />
              <CommonInput placeholder='YouTube' />
            </div>
            <div className='flex gap-4 items-center mt-4'>
              <FaThreads size={20} className='text-white' />
              <CommonInput placeholder='Threads' />
            </div>
            <div className='flex gap-4 items-center mt-4'>
              <GoLink size={20} className='text-white' />
              <CommonInput  placeholder='Others'/>
            </div>
          </div>
          <div className='mt-10'>
          <CommonButton className='text-white w-full'>Continue</CommonButton>
          </div>
        </div>
      </C.CreatorDetails>
    </C.CreatorWrapper>
  )
}

export default CreatorDetails

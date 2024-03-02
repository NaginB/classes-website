import React, { useState } from 'react'
import * as A from './styled';
import { FaAngleRight } from "react-icons/fa6";
import { LinkInterface } from './interface';


const Account: React.FC = () => {

  const [links] = useState<LinkInterface[]>([
    {
      title: 'Contact and Support',
      url: '/'
    },
    {
      title: 'Edit Profile',
      url: '/'
    },
    {
      title: 'Change Password',
      url: '/'
    },
    {
      title: 'Payment and Billing',
      url: '/'
    },
    {
      title: 'Subscription',
      url: '/'
    },
    {
      title: 'Sign Out',
      url: '/'
    },
  ])

  return (
    <A.Account>
      <h1 className='text-white font-noto'>Account</h1>
      <A.AccountLinkWrapper>
        {
          links.map((link, index) => (
            <A.AccountLinkBox
              key={`account-link-${index}`}
              to={link.url}>
              <h3>{link.title}</h3>
              <FaAngleRight />
            </A.AccountLinkBox>
          ))
        }
      </A.AccountLinkWrapper>
    </A.Account>
  )
}

export default Account

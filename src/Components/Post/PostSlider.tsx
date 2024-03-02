import React from 'react'
import * as P from "./style";
import SliderImg1 from "../../Assets/Images/girlWallpaper.jpg";
import SliderImg2 from "../../Assets/Images/profileGirl.jpeg";
import SliderImg3 from "../../Assets/Images/profileGirl2.jpeg";
import { FiUnlock } from "react-icons/fi";


interface Props {
  locked?: boolean
}

const PostSlider = ({ locked = false }: Props) => {
  const settings = {
    dots: !locked,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    appendDots: (dots: any) => (
      <ul>{dots}</ul>
    ),
    customPaging: (i: number) => (<P.Dot className="slider-dot"></P.Dot>)
  };

  if (!locked)
    return (
      <P.Slider {...settings}>
        <P.SliderContent >
          <P.PostImage src={SliderImg1} />
        </P.SliderContent>
        <P.SliderContent >
          <P.PostImage src={SliderImg2} />
        </P.SliderContent>
        <P.SliderContent >
          <P.PostImage src={SliderImg3} />
        </P.SliderContent>
      </P.Slider>
    )

  return (
    <P.LockedPostContainer>
      <P.LockedPostImg className='locked-img' src={SliderImg3} />
      <P.UnlockPost>
        <FiUnlock size={36} color='white'/>
        <P.UnlockPostBtn className='font-roboto'>Unlock Post</P.UnlockPostBtn>
      </P.UnlockPost>
    </P.LockedPostContainer>
  )
}

export default PostSlider

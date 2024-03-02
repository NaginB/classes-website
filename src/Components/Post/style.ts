import styled from "styled-components";
import SlickSlider from 'react-slick';

export const Post = styled.div<{ $locked: boolean }>`
  width: 600px;
  max-width: 100%;
  margin: auto;
  margin-bottom: 2rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  padding-bottom: 0;
  margin-bottom: 1rem;
`;

export const UserImage = styled.img`
  width: 50px;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
  border: 1.5px solid #fff;
`;

export const UserTitle = styled.p`
  font-size: 1rem;
  color: white;
`;

export const PostLocation = styled.div`
  font-size: 12px;
  color: white;
`

export const Time = styled.p`
  color: #8b8b8b;
  font-size: 14px;
  margin-top: 0;
`;

export const Description = styled.div`
  color: #ffffff;
  font-size: 14px;
  padding-top: 0.4rem;
  margin: auto;
  span{
    font-weight: 500;
  }
`;

export const PostImage = styled.img`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 object-fit: cover;
`;

export const PostFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
`;

export const Slider = styled(SlickSlider)`
  .slick-dots{
    bottom: -30px!important;
    li{
      width: 10px;
      height: 10px;
      margin: 0 3px;
    }

    li.slick-active{
      .slider-dot{
        background: #3897F0;
      }
    }
  }

  .slick-next{
    right: 10px!important;
  }

  .slick-prev{
    left: 10px!important;
    z-index: 10;
  }
`

export const SliderContent = styled.div`
  aspect-ratio: 1/1;
  width: 100%;
  background-color: rebeccapurple;
  position: relative;
`

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const LikesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 0.5rem;
`;

export const LikedByImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
`

export const LikedByText = styled.p`
  color: white;
  font-weight: 300;
  font-size: 14px;
  b{
    font-weight: 400;
    cursor: pointer;
  }
`
export const LockedPostContainer = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
  overflow: hidden;
`

export const LockedPostImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(20px);
`

export const UnlockPost = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`
export const UnlockPostBtn = styled.button`
  background-color: rgba(0, 0, 0, .56);
  padding: .4rem 1.2rem;
  color: white;
  border-radius: 50px;
  font-weight: 400;
`
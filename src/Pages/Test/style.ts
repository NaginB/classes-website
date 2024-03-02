import styled from "styled-components";

export const TestWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .audio-container{
    background-color: #FEFBF4;
    border: 1px solid #F2B426;
    width: 460px;
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .wave-icon{
    position: relative;
    height: 80px;
    flex-grow: 1;
    .waves{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      gap: .5rem;
      z-index: 5;

      .wave{
        min-width: 6px;
        width: 6px;
        border-radius: 2rem;
      }
    }

    .waves-pending{
      width: 100%;
      overflow: hidden;
      .wave{
        background-color: #ddd;
      }
    }
  }

  .wave-xs{
    height: 20px;
  }

  .wave-small{
    height: 40px;
  }

  .wave-med{
    height: 60px;
  }

  .wave-large{
    height: 80px;
  }

  .message-time{
    font-weight: 500;
    color: #F2B426;
  }

  .play-btn{
    width: 80px;
    min-width: 80px;
    height: 80px;
    min-height: 80px;
    background-color: #F2B426;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .play-btn-icon{
      font-size: 2.5rem;
      color: white;
      position: relative;
      left: 2px;
    }

    .pause{
      left: 0;
    }
  }
`

export const WavesCompleted = styled.div<{length: number}>`
   overflow: hidden;
   transition: 3s;
   width: ${(props) => `${props.length}%!important`};
   .wave{
     background-color: #F2B426;
   }
`
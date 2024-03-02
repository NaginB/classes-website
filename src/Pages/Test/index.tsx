import React, { useRef, useState } from 'react';
import { FaPlay } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";
import * as T from './style';

const TestPage: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [time, setTime] = useState('00:00');
  const [totalCompleted, setTotalCompleted] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  function calculateTimeDifference(totalSeconds: number, completedSeconds: number) {
    const remainingTime = totalSeconds - completedSeconds;

    // completed time percentage
    setTotalCompleted((completedSeconds * 100) / remainingTime);

    const minutes = Math.floor(remainingTime / 60);
    const remainingSeconds = Math.floor(remainingTime % 60);

    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

    setTime(`${formattedMinutes}:${formattedSeconds}`);
  }

  const audioHandler = () => {
    if (!isPlaying) {
      setLoading(true);

      audioRef.current?.addEventListener('timeupdate', (event) => {
        const audioElement = event.target as HTMLAudioElement;
        calculateTimeDifference(Math.round(audioElement.duration), Math.round(audioElement.currentTime));
      });

      audioRef.current?.play().then(() => {
        setIsPlaying(true)
        setLoading(false);
      })
    } else {
      audioRef.current?.pause();
      setIsPlaying(false)
      audioRef.current?.removeEventListener('timeupdate', () => {
        console.log('stopped')
        setIsPlaying(false)
      })
    }
  };

  return (
    <T.TestWrapper>
      <div className='audio-container'>
        <button disabled={loading} className={`play-btn ${loading ? 'opacity-50 pointer-events-none cursor-pointer': ''}`} onClick={() => audioHandler()}>
          {
            isPlaying ?
              <IoIosPause className='play-btn-icon pause' /> :
              <FaPlay className='play-btn-icon' />
          }
        </button>
        <div className="wave-icon">
          <div className="waves waves-pending">
            <div className="wave wave-xs"></div>
            <div className="wave wave-small"></div>
            <div className="wave wave-med"></div>
            <div className="wave wave-large"></div>
            <div className="wave wave-med"></div>
            <div className="wave wave-small"></div>
            <div className="wave wave-med"></div>
            <div className="wave wave-large"></div>
            <div className="wave wave-med"></div>
            <div className="wave wave-small"></div>
            <div className="wave wave-med"></div>
            <div className="wave wave-large"></div>
            <div className="wave wave-med"></div>
            <div className="wave wave-small"></div>
            <div className="wave wave-med"></div>
            <div className="wave wave-large"></div>
            <div className="wave wave-med"></div>
            <div className="wave wave-small"></div>
            <div className="wave wave-xs"></div>
          </div>

          <T.WavesCompleted length={totalCompleted} className="waves waves-completed">
            <div className="wave wave-xs"></div>
            <div className="wave wave-small"></div>
            <div className="wave wave-med"></div>
            <div className="wave wave-large"></div>
            <div className="wave wave-med"></div>
            <div className="wave wave-small"></div>
            <div className="wave wave-med"></div>
            <div className="wave wave-large"></div>
            <div className="wave wave-med"></div>
            <div className="wave wave-small"></div>
            <div className="wave wave-med"></div>
            <div className="wave wave-large"></div>
            <div className="wave wave-med"></div>
            <div className="wave wave-small"></div>
            <div className="wave wave-med"></div>
            <div className="wave wave-large"></div>
            <div className="wave wave-med"></div>
            <div className="wave wave-small"></div>
            <div className="wave wave-xs"></div>
          </T.WavesCompleted>

          {/* <div className='wave-interval'></div> */}
        </div>
        <p className='message-time font-roboto'>{time}</p>
      </div>



      <audio
        className='hidden'
        ref={audioRef}
        controls
        preload="none">
        <source src="https://paglasongs.com/files/download/id/16807" type="audio/mpeg" />
      </audio>
    </T.TestWrapper>
  );
};

export default TestPage;

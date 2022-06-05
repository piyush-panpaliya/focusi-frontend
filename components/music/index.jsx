import React,{useState,useEffect,useRef} from 'react'

const tracks = [
  {
    title: "gaana",
    artist: "pta nhi",
    audioSrc: "/media/a.mp3",
		image: "",
    color: "green",
  }
];

const AudioControls = ({
  isPlaying,
	onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) =>{
  <div className='flex justify-center gap-4 items-center h-full'>
    <button onClick={onPrevClick}><img src='/svg/left.svg'/></button>
    <button onClick={()=>onPlayPauseClick(isPlaying?false:true)}><img src={isPlaying?"/svg/playing.svg":"/svg/pause.svg"}/></button>
    <button onClick={onNextClick}><img src='/svg/right.svg'/></button>
  </div>
}
const Index = () => {

  return (
    <div className='flex justify-center w-full mt-2'>
      <div className='rounded-xl border-white/50 border-4 h-[23vh] '>
        {/* <AudioControls
        isPlaying={isPlaying}
        onPrevClick={toPrevTrack}
        onNextClick={toNextTrack}
        onPlayPauseClick={setIsPlaying}
        /> */}
      <iframe className='rounded-xl bg-transparent' height="100%" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1056680920&color=%231a1a2c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      </div>
    </div>
  )
}

export default Index
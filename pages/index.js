import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { imageList } from "@/public/index";
import { useEffect, useRef, useState } from "react";
// import song from '@/public/song.mp3'

const inter = Inter({ subsets: ["latin"] });



export default function Home() {
  const audioRef =  useRef()
  const [playing, setPlaying] = useState(false);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      var audio = new Audio("/song.mp3")
      // audio.play();
    }
  }, []);

  const handlePlay = () => {
    // audio.play()
    // setPlaying(true)
    audioRef.current.play()
  }



  return (
    <>
      <Head>
        <style>{`
          @keyframes scroll {
            0% { transform: translateY(0); }
            100% { transform: translateY(-100%); }
          `}</style>
      </Head>
      <div className="wrapper hoverme">
        <h1 className="birthday">Happy Birthday My Love Gitanjali 🎂💕💖</h1>
        <div className="drag-container">
          {imageList.map((image, i) => {
            return (
              <Image unoptimized={true} className="photo" src={image} key={i} alt="Image 1"  />
            );
          })}
        </div>
        <audio ref={audioRef} src={'/song.mp3'} controls autoPlay={playing} loop style={{zIndex:3, display:"none"}}/>
        <button onClick={handlePlay} style={{position:"absolute"}}>click here to listen song</button>
      </div>
    </>
  );
}

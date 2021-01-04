import React, {
    useRef,
    useState,
    Fragment,
    forwardRef,
    useImperativeHandle,
  } from "react";

  import ReactPlayer from "react-player";

  export interface IVideoProps {
      urlVideo: string;
  }

  const Video = forwardRef(({ urlVideo } : IVideoProps, ref) => {
    const [play, setPlay] = useState(false);
    const player : any = useRef(null);

    useImperativeHandle(ref, () => ({
      handlerStopVideo() {
        handlerControls();
        handlerStop();
      },
      handlerPlayPause() {
        setPlay(true);
      },
    }));

    const handlerStop = () => {
      setPlay(false);
    };
    const handlerControls = () => {
      player.current.seekTo(0);
    };

    return (
      <Fragment>
        <ReactPlayer
          width="100%"
          height="100%"
          playing={play}
          loop={true}
          controls={false}
          url={urlVideo}
          ref={player}
        />
      </Fragment>
    );
  });

  export default Video;

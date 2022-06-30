let imgFile = $('input');
var loadFile = async function(event) {
	let imgSrc = URL.createObjectURL(event.target.files[0]);

  const videoTrack = await Twilio.Video.createLocalVideoTrack({
    width: 640,
    height: 480,
    frameRate: 24
  });
  document.getElementById('video').appendChild(videoTrack.attach());
  console.log(imgSrc)
  let img = new Image();
  img.src = imgSrc;
  img.onload = async () => {
    const bg = new Twilio.VideoProcessors.VirtualBackgroundProcessor({
      assetsPath: '/',
      backgroundImage: img,
      maskBlurRadius: 5,
    });
    await bg.loadModel();

    videoTrack.addProcessor(bg);
  }
}



const showLocalVideo = async () => {
    const videoTrack = await Twilio.Video.createLocalVideoTrack({
      width: 640,
      height: 480,
      frameRate: 24
    });
    document.getElementById('video').appendChild(videoTrack.attach());
  }
  showLocalVideo();



// background Blur
  var blurBg = async () => {
    var videoTrack = await Twilio.Video.createLocalVideoTrack({
      width: 640,
      height: 480,
      frameRate: 24
    });
    document.getElementById('video').appendChild(videoTrack.attach());
  
    const bg = new Twilio.VideoProcessors.GaussianBlurBackgroundProcessor({
      assetsPath: '/',
      maskBlurRadius: 10,
      blurFilterRadius: 5,
    });
    await bg.loadModel();
    videoTrack.addProcessor(bg);
  }


  const imgBg = async () => {
    const videoTrack = await Twilio.Video.createLocalVideoTrack({
      width: 320,
      height: 240,
      frameRate: 24
    });
    document.getElementById('video').appendChild(videoTrack.attach());
  
    let img = new Image();
    img.src = 'background.png';
    img.onload = async () => {
      const bg = new Twilio.VideoProcessors.VirtualBackgroundProcessor({
        assetsPath: '/',
        backgroundImage: img,
        maskBlurRadius: 5,
      });
      await bg.loadModel();
  
      videoTrack.addProcessor(bg);
    }
  }
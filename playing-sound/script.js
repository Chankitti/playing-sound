function playAudio(audioId, element) {
  const audioElement = document.getElementById(audioId);
  
  const allAudioElements = document.querySelectorAll("audio");
  allAudioElements.forEach(audio => {
      if (audio !== audioElement) {
          audio.pause();
          audio.currentTime = 0;
      }
  });

  if (audioElement.paused) {
      audioElement.play();
  } else {
      audioElement.pause();
  }

  audioElement.loop = true;

  if (element.classList.contains("active")) {
    element.classList.remove("active");
} else {
    const allSoundBoxes = document.querySelectorAll(".soundbox");
    allSoundBoxes.forEach(box => box.classList.remove("active"));

    element.classList.add("active");
}
}





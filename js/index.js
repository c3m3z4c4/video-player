    const $video = document.querySelector('#video');
    const $bwd = document.querySelector('#bwd');
    const $play = document.querySelector('#play');
    const $pause = document.querySelector('#pause');
    const $fwd = document.querySelector('#fwd');

    
    $play.addEventListener('click', handlePlay)
    $pause.addEventListener('click', handlePause)
    $bwd.addEventListener('click', handleBwd)
    $fwd.addEventListener('click', handleFwd)

    function handlePlay () {
      $video.play();
      $play.hidden = true;
      $pause.hidden = false;
    }
    function handlePause () {
      $video.pause();
      $pause.hidden = true;
      $play.hidden = false;
    }
    function handleBwd () {
      $video.currentTime -= 10;
    }
    function handleFwd () {
      $video.currentTime += 10;
    }


const $progress = document.querySelector('#progress');
  
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);
    
function handleLoaded() {
  $progress.max = $video.duration;
  // console.log('Cargando Video', $video.duration);
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
  // console.log('Llevamos',$video.currentTime);
}

$progress.addEventListener('input', handleInput);

function handleInput() {
  console.log($progress.value);
  $video.currentTime = $progress.value;
}

const sliders = document.querySelectorAll('.slider');

sliders.forEach(slider => {
  const fill = slider.querySelector('.slider-fill');
  const thumb = slider.querySelector('.slider-thumb');

  let targetPercent = 0;
  let currentPercent = 0;
  let isDragging = false;
  if (slider.dataset.control === 'volume') {
        currentPercent = 0
        targetPercent = 50;

  } else if (slider.dataset.control === 'speed') {
        currentPercent = 0
        targetPercent = 50;

}
  // Update target on drag or click
  const setTarget = (e) => {
    const rect = slider.getBoundingClientRect();
    let pos = e.clientX - rect.left;
    pos = Math.max(0, Math.min(pos, rect.width));
    targetPercent = (pos / rect.width) * 100;
  }

  thumb.addEventListener('mousedown', () => { isDragging = true; });
  document.addEventListener('mouseup', () => { isDragging = false; });
  document.addEventListener('mousemove', (e) => { if(isDragging) setTarget(e); });

  slider.addEventListener('click', setTarget);
  let frozenTime

  // Animation loop
  const animate = () => {
    // ease toward target
    currentPercent += (targetPercent - currentPercent) * 0.08; // 0.2 = easing factor
      if (slider.dataset.control === 'volume') {
        video.volume = currentPercent / 100;
    } else if (slider.dataset.control === 'speed') {
            video.playbackRate = 0.5 + (currentPercent / 100)// * 1.5;
    } else if (slider.dataset.control === 'scrub') {
        if ( isDragging == true ) {
            video.currentTime = currentPercent / 100 * video.duration
            
        }
        else if ( isDragging == false && Math.abs(targetPercent - currentPercent) * video.duration / 100 > 0.5) {
            video.currentTime = currentPercent / 100 * video.duration
            //
        } 
        else if ( isDragging == false && Math.abs(targetPercent - currentPercent) / video.duration <= 1) {
            targetPercent = video.currentTime / video.duration * 100
        } 
    }
    fill.style.width = currentPercent + '%';
    thumb.style.left = currentPercent + '%';

    requestAnimationFrame(animate);
  }

  animate();
});

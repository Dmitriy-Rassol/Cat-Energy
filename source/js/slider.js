const progress = document.querySelector('.example__progress');
const progressWrap = document.querySelector('.example__progress-wrapper');
const progressToggle = document.querySelector('.example__state-toggle');
const btnBefore = progress.querySelector('.example__state-button--before');
const btnAfter = progress.querySelector('.example__state-button--after');
const exampleIllustrationAfter = progress.querySelector('.example__illustration--after');
const exampleIllustrationBefore = progress.querySelector('.example__illustration--before');
const exampleIllustration = progress.querySelector('.example__illustration');
const range = document.getElementById('progress')

const TABLET_WIDTH = 768;
const initialize = () => {
  const viewport = document.documentElement.clientWidth || window.innerWidth;


  if (viewport < TABLET_WIDTH) {
    exampleIllustrationBefore.style.width = '100%';
    exampleIllustrationAfter.style.width = '100%';

    const toggleBefore = () => {
      exampleIllustrationBefore.style.width = '100%';
      exampleIllustrationAfter.style.width = '100%';
      progressWrap.classList.remove('example__progress-wrapper--after');
      progressToggle.classList.remove('example__state-toggle--after');
    }

    const toggleAfter = () => {
      exampleIllustrationBefore.style.width = '100%';
      exampleIllustrationAfter.style.width = '100%';
      progressWrap.classList.add('example__progress-wrapper--after');
      progressToggle.classList.add('example__state-toggle--after');
    }

    if (progress) {
      btnBefore.addEventListener('click', toggleBefore);
      btnAfter.addEventListener('click', toggleAfter);
    }

  } else {
    toggleBefore = () => {
      exampleIllustrationBefore.style.width = '100%';
      exampleIllustrationAfter.style.width = '0%';
      range.value = parseInt(exampleIllustrationAfter.style.width);

    }

    toggleAfter = () => {
      exampleIllustrationBefore.style.width = '0%';
      exampleIllustrationAfter.style.width = '100%';
      range.value = parseInt(exampleIllustrationAfter.style.width);

    }

    const rangeSlider = () => {
      range.onmouseup = () => {
        exampleIllustrationAfter.style.width = range.value + '%';
        exampleIllustrationBefore.style.width = (100 - range.value) + '%';
        range.onmousemove = () => {
          exampleIllustrationAfter.style.width = range.value + '%';
          exampleIllustrationBefore.style.width = (100 - range.value) + '%';
        }
      }
    }

    if (progress) {
      btnBefore.addEventListener('click', toggleBefore);
      btnAfter.addEventListener('click', toggleAfter);
      range.addEventListener('mousedown', rangeSlider);
    }
  }
}
window.addEventListener('load', initialize);
window.addEventListener('resize', initialize);

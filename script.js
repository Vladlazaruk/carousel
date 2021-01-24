const slide = document.querySelectorAll('.slide'),
      prev = document.querySelector('.prev_btn'),
      next = document.querySelector('.next_btn'),
      container = document.querySelector('.slider_container'),
      track = document.querySelector('.slider_treck'),
      itemsCount = slide.length;

      let position = 0;
      const slidesToShow = 2;
      const slidesToScroll = 1;

const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;


const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const checkBtns = () => {
   prev.disabled = position === 0;
   next.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

slide.forEach((item) =>{
    item.style.minWidth = `${itemWidth}px`;
});

prev.addEventListener('click', () =>{
    const itemLeft = Math.abs(position) / itemWidth;
   position += itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
   setPosition();
   checkBtns();
   console.log(position);
});

next.addEventListener('click', () =>{
    const itemLeft = itemsCount -( Math.abs(position) + (slidesToShow * itemWidth)) / itemWidth;
    position -= itemLeft >= slidesToScroll ? movePosition : itemLeft * itemWidth;
    setPosition();
    checkBtns();
    console.log(position);
});

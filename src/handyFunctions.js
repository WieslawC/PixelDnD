const createSpriteAnimation = (sprite, interval = 100) => {
  let imageWidth = sprite.offsetWidth;
  let imageHeight = sprite.offsetHeight;
  let moveValue = imageHeight; //consider square single sprite

  setInterval(() => {
    if (moveValue === imageWidth) moveValue = 0;
    sprite.style.transform = `translateX(${-moveValue}px)`;
    moveValue += imageHeight;
  }, interval);
};

export default createSpriteAnimation;

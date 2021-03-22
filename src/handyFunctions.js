const createSpriteAnimation = (sprite, interval = 100) => {
  let imageHeight = sprite.offsetHeight;
  let moveValue = imageHeight; //consider square single sprite

  setInterval(() => {
    if (moveValue === sprite.offsetWidth) moveValue = 0;
    sprite.style.transform = `translateX(${-moveValue}px)`;
    moveValue += imageHeight;
  }, interval);
};

export default createSpriteAnimation;

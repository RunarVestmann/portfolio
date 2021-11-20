const fadeInTimeInSeconds = 1;

export const fadeIn = (evt) => {
    const image = evt.target;
    image.style.opacity = '0';
    image.style.transition = `opacity ${fadeInTimeInSeconds}s`;
    image.style.opacity = '1';
};

const productContainers = [...document.querySelectorAll('.list-of-products')];
const nxtBtn = [...document.querySelectorAll('.after-button')];
const preBtn = [...document.querySelectorAll('.before-button')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})
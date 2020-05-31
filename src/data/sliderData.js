function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

const sliderData = range(1, 10);


export default sliderData;

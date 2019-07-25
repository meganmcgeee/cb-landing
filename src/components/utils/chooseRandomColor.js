//https://timonweb.com/tutorials/how-to-get-a-random-value-from-a-javascript-array/

export default function chooseRandomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

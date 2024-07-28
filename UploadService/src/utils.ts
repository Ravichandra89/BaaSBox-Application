// Logic to Generating Unique Id's Using MathRandom Function Here

const IdLength = 5;

function generate() {
  let id = "";
  const sample = "123456789qwertyuiopasdfghjklzxcvbnm";

  for (let i = 0; i < IdLength; i++) {
    id += sample[Math.floor(Math.random() * sample.length)];
  }

  return id;
}

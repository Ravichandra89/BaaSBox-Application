const Idlength = 5;

export function generate() {
  const subset = "123456789qwertyuiopasdfghjklzxcvbnm";
  let id = "";
  for (let i = 0; i < Idlength; i++) {
    id += subset[Math.floor(Math.random() * subset.length)];
  }
  return id;
}

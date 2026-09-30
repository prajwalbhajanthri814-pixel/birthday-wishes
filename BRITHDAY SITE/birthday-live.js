const memories = [
  "I may not have been born with a sister, but I’m grateful life gave me you.",
  "No matter how far life takes us, you will always have a brother cheering for you.",
  "The best family is sometimes the family we choose—and I choose you, every time."
];

const memoryButton = document.querySelector('#memoryButton');
const memoryReveal = document.querySelector('#memoryReveal');
let memoryIndex = 0;

memoryButton.addEventListener('click', () => {
  memoryReveal.textContent = memories[memoryIndex];
  memoryIndex = (memoryIndex + 1) % memories.length;
  memoryButton.textContent = 'another tiny memory →';
});

const deliveryText = 'Jyoo, your tiny monkey surprise is getting delivered soon. Get ready for a big birthday smile! ✦';
let deliveryTimer;

function showDeliveryMessage() {
  const message = document.querySelector('#giftMessage');
  const text = document.querySelector('#deliveryText');
  message.hidden = false;
  clearInterval(deliveryTimer);
  text.textContent = '';
  let letter = 0;
  deliveryTimer = setInterval(() => {
    text.textContent += deliveryText[letter];
    letter += 1;
    if (letter === deliveryText.length) clearInterval(deliveryTimer);
  }, 28);
}

document.querySelector('#giftBox').addEventListener('click', () => {
  document.querySelector('#giftBox').classList.add('is-open');
  showDeliveryMessage();
});

document.querySelectorAll('.photo-slot input').forEach((input) => {
  input.addEventListener('change', () => {
    const photo = input.files[0];
    if (!photo) return;
    const slot = input.closest('.photo-slot');
    const image = slot.querySelector('img');
    image.src = URL.createObjectURL(photo);
    image.alt = 'A special memory';
    slot.classList.add('has-photo');
  });
});

const bloomButton = document.querySelector('#bloomButton');
const bloomStage = document.querySelector('#bloomStage');
const bloomCards = document.querySelector('#bloomCards');
const bloomHint = document.querySelector('#bloomHint');

bloomButton.addEventListener('click', () => {
  const opened = bloomStage.classList.toggle('is-open');
  bloomButton.setAttribute('aria-expanded', String(opened));
  bloomCards.setAttribute('aria-hidden', String(!opened));
  bloomHint.textContent = opened ? 'tap again to fold the memories back' : 'tap the card to open the magic';
});


// Add small, occasional 3D-style greetings without interrupting reading.
const ambientGreetings = ['♡', 'keep smiling ✦', 'you are loved', '✧'];
let greetingIndex = 0;
window.setInterval(() => {
  const el = document.createElement('span');
  el.className = 'passing-greeting';
  el.setAttribute('aria-hidden', 'true');
  el.textContent = ambientGreetings[greetingIndex % ambientGreetings.length];
  greetingIndex += 1;
  el.style.left = `${12 + Math.random() * 72}%`;
  el.style.setProperty('--drift', `${Math.round(Math.random() * 90 - 45)}px`);
  document.body.append(el);
  window.setTimeout(() => el.remove(), 5200);
}, 5200);

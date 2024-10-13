const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  const nameValue = nameInput.value.trim();

  nameOutput.textContent = nameValue === '' ? 'Anonymous' : nameValue;
});
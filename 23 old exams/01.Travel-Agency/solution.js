window.addEventListener('load', solution);
 
function solution() {
  let nameElement = document.querySelector('#fname');
  let emailElement = document.querySelector('#email');
  let numberElement = document.querySelector('#phone');
  let addressElement = document.querySelector('#address');
  let postcodeElement = document.querySelector('#code');
 
  let editButton = document.querySelector('#editBTN');
  let submitButton = document.querySelector('#submitBTN');
  let continueButton = document.querySelector('#continueBTN');

  let nameLi;
  let emailLi;
  let phoneLi;
  let addressLi;
  let postcodeLi;
 
  let ul = document.querySelector('#infoPreview');
 
  submitButton.addEventListener('click', (ev) => {
    ev.preventDefault();
 
    if (nameElement.value && emailElement.value) {
      nameLi = document.createElement('li');
      emailLi = document.createElement('li');
      phoneLi = document.createElement('li');
      addressLi = document.createElement('li');
      postcodeLi = document.createElement('li');
 
      nameLi.textContent = `Full Name: ${nameElement.value}`;
      ul.appendChild(nameLi);
      nameElement.value = '';
 
      emailLi.textContent = `Email: ${emailElement.value}`;
      ul.appendChild(emailLi);
      emailElement.value = '';
 
      phoneLi.textContent = `Phone Number: ${numberElement.value}`;
      ul.appendChild(phoneLi);
      numberElement.value = '';
 
      addressLi.textContent = `Address: ${addressElement.value}`;
      ul.appendChild(addressLi);
      addressElement.value = '';
 
      postcodeLi.textContent = `Postal Code: ${postcodeElement.value}`;
      ul.appendChild(postcodeLi);
      postcodeElement.value = '';
 
      submitButton.disabled = true;
      editButton.disabled = false;
      continueButton.disabled = false;
    }
  })
 
 
  editButton.addEventListener('click', (ev) => {
    ev.preventDefault();
 
    nameElement.value = nameLi.textContent.split(': ')[1].trim();
    emailElement.value = emailLi.textContent.split(': ')[1].trim();
    numberElement.value = phoneLi.textContent.split(': ')[1].trim();
    addressElement.value = addressLi.textContent.split(': ')[1].trim();
    postcodeElement.value = postcodeLi.textContent.split(': ')[1].trim();
 
    ul.removeChild(nameLi);
    ul.removeChild(emailLi);
    ul.removeChild(phoneLi);
    ul.removeChild(addressLi);
    ul.removeChild(postcodeLi);
 
    submitButton.disabled = false;

    editButton.disabled = true;
    continueButton.disabled = true;
  })

  continueButton.addEventListener('click', () => {
    let blockDiv = document.querySelector('#block');
    blockDiv.innerHTML = '';

    let h3 = document.createElement('h3');
    h3.textContent = 'Thank you for your reservation!';
    blockDiv.appendChild(h3);
  })
}
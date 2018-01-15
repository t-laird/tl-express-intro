const endpointInput = document.querySelector('.endpoint');
const submitEndpoint = document.querySelector('.submitEndpoint');
const responseContainer = document.querySelector('.serverResponse');

const checkEndpoint = async () => {
  const { value } = endpointInput;
  const validEndpoints = ['/sunsets', '/json'];

  for (ind in validEndpoints) {
    console.log(ind);
    if (validEndpoints[ind] !== value) {
      responseContainer.innerHTML = 'Invalid endpoint';
    } else {
      window.location = `http://localhost:3000${validEndpoints[ind]}`
    }
  }
};



submitEndpoint.addEventListener('click', checkEndpoint);
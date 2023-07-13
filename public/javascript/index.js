const charactersAPI = new APIHandler('http://localhost:8000');
const APIHandler = require('./APIHandler')


window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList()
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    const characterId = document.getElementById('character-id').value

    charactersAPI.getOneRegister(characterId)
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    const characterId = document.getElementById('character-id').value

    charactersAPI.deleteOneRegister(characterId)
      .then(() => {
        document.getElementById('delete-one').style.backgroundColor = 'green'
      })
      .catch(() => {
        document.getElementById('delete-one').style.backgroundColor = 'red'
  });

  //need to talk to Ashref about the all of this..

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
 
  const id = document.getElementById('edit-id').value;
  
  const updatedCharacterData = {
    name: document.getElementById('edit-name').value,
    occupation: document.getElementById('edit-occupation').value,
    weapon: document.getElementById('edit-weapon').value,
  };

  updateOneRegister(id, updatedCharacterData);

  document.getElementById('edit-id').value = '';
  document.getElementById('edit-name').value = '';
  document.getElementById('edit-occupation').value = '';
  document.getElementById('edit-weapon').value = '';
});

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

  });
});

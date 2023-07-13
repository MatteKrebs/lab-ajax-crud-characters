class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList(){
    axios.get(`${this.BASE_URL}/characters`)
    .then((all) => {
      console.log('All Characters:', all.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  getOneRegister(id) {
    axios.get(`${this.BASE_URL}/characters/${id}`)
    .then((character) => {
      console.log('Character with id: ', character.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  createOneRegister(characterData){
    axios.post(`${this.BASE_URL}/characters`, characterData)
    .then((newChar) => {
      console.log('Character created: ', newChar.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  updateOneRegister(id, characterData){
    axios.put(`${this.BASE_URL}/characters/${id}`, characterData)
    .then((updatedChar) => {
      console.log('Character updated: ', updatedChar.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  deleteOneRegister(id){
    axios.delete(`${this.BASE_URL}/characters/${id}`)
    .then(() => {
      console.log('Deleted character: ', id);
    })
    .catch((err) => {
      console.log(err);
    });
  }
}

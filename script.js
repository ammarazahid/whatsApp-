

axios.get('https://tk-whatsapp.herokuapp.com/messages')
  .then(function (response) {
    // handle success

    for (let i = 0; i < response.data.length; i++) {
      let message = response.data[i];
      document.querySelector('ul').innerHTML +=

        `<ul>
    <li class="display">
    <div class="main">
<div>   
 <img src="${message.profilePic}">
 </div>
 <div>
    <h1>${message.name}</h1>
          <p>${message.number}</p>
          <p>${message.firstLine}</p>
          <p>${message.time}</p>
    </div>
    </div>
        </li>
        <ul>`
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

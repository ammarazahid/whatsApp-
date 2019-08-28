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
 <div id="msgTime">
 <div >
    <h3>${message.name}</h3>
          <p class="numb">${message.number}</p>
          <p class="firstline">${message.firstLine}</p>
    </div>
<div class="timeIcon">
<p class="time">${message.time}</p>
<p id="icon">${message.numbUnread}</p>
</div>
</div>
    </div>
        </li>
        <ul>`
        // if(message.isUnread == false){
        //   document.querySelector('#icon').value.display = "none";
        // }
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
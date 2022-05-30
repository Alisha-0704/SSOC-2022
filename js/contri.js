var teamMember = [
  {
    name: "Jai Sadana",
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFnZ-9ZxP3TyQ/profile-displayphoto-shrink_400_400/0/1649264186230?e=1659571200&v=beta&t=ktEImyS48ZYkoBYgEBbf1XynyGi_YwS9rG3-onpb33s",
    github: "https://github.com/jaisadana1999",
    linkedin: "https://www.linkedin.com/in/jaisadana/",
  },
  {
    name: "Garvitraj Pandey",
    image:
      "https://media-exp1.licdn.com/dms/image/C5603AQGXaJoaoXlVOA/profile-displayphoto-shrink_400_400/0/1629097609268?e=1659571200&v=beta&t=3eRI5S8uSwiQze-5jHnoSK5hZoenwsZ8xqNYK5W6IqI",
    github: "https://github.com/garvitraj",
    linkedin: "https://www.linkedin.com/in/garvitraj-pandey/",
  },
  {
    name: "Souvik Mandal",
    image: "https://avatars.githubusercontent.com/u/72222987?v=4",
    github: "https://github.com/8-bit-souvik",
    linkedin: "https://www.linkedin.com/in/8bitsouvik/",
  },
  {
    name: "Jayanta Pandit",
    image:
      "https://media-exp1.licdn.com/dms/image/C4E03AQG5ER2q7Lsv1A/profile-displayphoto-shrink_400_400/0/1650656994770?e=1659571200&v=beta&t=jNsbRFoLOD5iOfiPuqAJMohMVIogJAbKaUFzf_Ns-aI",
    github: "https://github.com/jay-io",
    linkedin: "https://www.linkedin.com/in/panditjay",
  },
  {
    name: "Ambuj Srivastava",
    image:
      "https://media-exp1.licdn.com/dms/image/C4E03AQG1i6RvAOnCmQ/profile-displayphoto-shrink_400_400/0/1634215731462?e=1659571200&v=beta&t=wA2uhTuGx_Wdz8K5nUsYw6YVYE_EYGS0Pg0l3b8n6ok",
    github: "https://github.com/Piyush-Codes7",
    linkedin: "https://twitter.com/Piyush_Chandel7",
  },
  {
    name: "Pritam Nandi",
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFAgVgdU3QVtQ/profile-displayphoto-shrink_400_400/0/1652782107425?e=1659571200&v=beta&t=KNcfoEM6HSOsdixV_fOrOnbhV2osCuw1WXLu5vhonBw",
    github: "https://github.com/kamleshjoshi8102",
    twitter: "https://twitter.com/spyd3r17",
    linkedin: "https://www.linkedin.com/in/pritamnandi/",
  },
  {
    name: "Atul Chaudhary",
    image:
      "https://media-exp1.licdn.com/dms/image/C4D03AQHvvwhd5yIxow/profile-displayphoto-shrink_400_400/0/1641576298930?e=1659571200&v=beta&t=UHYsojUrrC_JIWiWWJ7Yn2g4RLCEvEpWji74y_HluBA",
    github: "https://github.com/atul316",
    linkedin: "https://www.linkedin.com/in/atul-chowdhury-3989a3229/",
  },
  {
    name: "Alisha Kushwaha",
    image: "https://github.com/rhvsingh.png",
    github: "https://github.com/Alisha-0704",
    linkedin: "https://www.linkedin.com/in/alisha-kushwaha-776041211",
  },
  {
    name: "Govind Singh",
    image:
      "https://media-exp1.licdn.com/dms/image/C4E03AQEMPRuM3mIJCA/profile-displayphoto-shrink_400_400/0/1643517790894?e=1659571200&v=beta&t=K-47wguO5gDdlj675zNBtcPwviKMUMf1AiVuviJQ93Q",
    github: "https://github.com/GovindSingh9447",
    linkedin: "https://www.linkedin.com/in/govind-singh9447",
  },
];

var contriMember = [
  {
    name: "Devfolio",
    image: "https://avatars.githubusercontent.com/u/38809367?s=280&v=4",
    github: "https://devfolio.co",
    level: "platinum",
  },
  {
    name: "Polygon",
    image: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
    github: "https://www.polygon.com",
    level: "platinum",
  },
  {
    name: "Celo",
    image:
      "https://pbs.twimg.com/profile_images/1493309659599486986/5ETdHxeE_400x400.jpg",
    github: "https://celo.org",
    level: "gold",
  },
  {
    name: "File Coin",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Filecoin.png",
    github: "http://www.filecoin.com",
    level: "gold",
  },
  {
    name: "Tezos",
    image: "https://s2.coinmarketcap.com/static/img/coins/200x200/2011.png",
    github: "https://tezos.com",
    level: "gold",
  },
];

var contributors1 = document.querySelectorAll(".contributors")[0];
var contributors2 = document.querySelectorAll(".contributors")[1];

for (let i = 0; i < teamMember.length; i++) {
  let divCreate = document.createElement("div");
  divCreate.className = "contri_box";
  divCreate.innerHTML =
    '<div class="contri-card"><div class="contri-card-inner"><div class="contri-card-front"><img src="' +
    teamMember[i].image +
    '" alt="' +
    teamMember[i].name +
    '" /></div><div class="contri-card-back"><div style="position:relative;transform-style:preserve-3d;"><span>' +
    teamMember[i].name +
    '</span><div> <li><a href="' +
    teamMember[i].github +
    '" target="_blank"><i class="fab fa-github"></i></a></li><li><a href="' +
    teamMember[i].linkedin +
    '" target="_blank"><i class="fab fa-linkedin"></i></a></li></div></div></div></div></div>';
  contributors1.append(divCreate);
}

let platinum = contriMember.filter(function (contriMember) {

    return contriMember.level === "platinum";

});

var divCreate = document.createElement("div");
divCreate.innerHTML = "<br> <br> <br> <h2>Platinum</h2>";
contributors2.append(divCreate);



for (let i = 0; i < platinum.length; i++) {
    let divCreate = document.createElement("div");
    divCreate.className = "contri_box";
    divCreate.innerHTML =
      '<div class="contri-card"> <a href="' +
      platinum[i].github +
      '"> <div class="contri-card-inner"><div class="contri-card-front"><img src="' +
      platinum[i].image +
      '" alt="' +
      platinum[i].name +
      '" /></div><div class="contri-card-back"><div><span style="color:black; text-shadow: 0 1px 5px blue;">' +
      platinum[i].name +
      "</span></a></div> ";
    contributors2.append(divCreate);
  }

  var divCreate = document.createElement("div");
  divCreate.innerHTML = "<br> <br> <br> <h2>Gold</h2>";
  contributors2.append(divCreate);

let gold = contriMember.filter(function (contriMember) {

      return contriMember.level === "gold";

});



for (let i = 0; i < gold.length; i++) {
  let divCreate = document.createElement("div");
  divCreate.className = "contri_box";
  divCreate.innerHTML =
    '<div class="contri-card"> <a href="' +
    gold[i].github +
    '"> <div class="contri-card-inner"><div class="contri-card-front"><img src="' +
    gold[i].image +
    '" alt="' +
    gold[i].name +
    '" /></div><div class="contri-card-back"><div><span style="color:black; text-shadow: 0 1px 5px blue;">' +
    gold[i].name +
    "</span></a></div> ";
  contributors2.append(divCreate);
}

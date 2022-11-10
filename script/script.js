const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
   const catsImgDiv = document.querySelector(".catsImgDiv")
   catsImgDiv.innerHTML = ""
   const data = await fetch(BASE_URL)
      .then(res => res.json())
      .then((data) => {
            let catsImgUrl = data[0].url

            let catsImgEl = document.createElement("img")
            catsImgEl.setAttribute('src', `${catsImgUrl}`)
            
            let catsImgDiv = document.querySelector(".catsImgDiv")
            catsImgDiv.appendChild(catsImgEl)
})

.catch(cat => console.log(cat))

}
 const loadImg = async () => {
   const catImg = document.getElementById('cat');
   catImg.src = await getCats();
} 
button.addEventListener('click', loadImg);
loadImg();

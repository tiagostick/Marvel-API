const marvel = {
    render:()=>{
        const timeStamp= '1594158815';
        const apiKey='7aa12e7cd2b34e756af648b48e1f04c7';
        const md5='604ccd5fba237b58392e5b4ae332a00f';
        const urlAPI =`https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=20`;
        const container = document.querySelector('#marvel');
        let contentHTML = '';

        

        fetch(urlAPI).then(res => res.json()).then((json) => {
        console.log(json, 'RES.JSON')
        for (const hero of json.data.results) {
            let urlHero = hero.urls[0].url;
            contentHTML += `
              <div class="col-md-3">
                  <a href="${urlHero}" target="_blank">
                    <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" 
                    class="img-thumbnail">
                  </a>
                  <a href="${urlHero}" target="_blank">
                  <h3 class="title">${hero.name}</h3>
                  </a>
                  <p class="moddate">Última alteração: ${hero.modified.substring(0, 10)}</p>
              </div>`;
          }
          container.innerHTML = contentHTML;
        })
    }
  };
  marvel.render();
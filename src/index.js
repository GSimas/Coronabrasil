

axios.get('https://coronavirus-tracker-api.herokuapp.com/v2/locations?country_code=BR')
      .then(function (response) {

        console.log("Start");
        
        brazil_data = response.data.locations[0].latest;
        var confirmed_br = brazil_data.confirmed;
        var deaths_br = brazil_data.deaths;
        var day = moment().subtract(1,'days').format("DD/MM/YYYY");
        
        var para_confirmed = document.createElement("p");
        var node_confirmed = document.createTextNode(confirmed_br);
        para_confirmed.appendChild(node_confirmed);

        var para_deaths = document.createElement("p");
        var node_deaths = document.createTextNode(deaths_br);
        para_deaths.appendChild(node_deaths);

        var elem_confirmed = document.querySelector('#loading1');
        elem_confirmed.parentNode.removeChild(elem_confirmed);
        var element_confirmed = document.getElementById("div1");
        var child = document.getElementById("#loading1");
        element_confirmed.insertBefore(para_confirmed, child);  
        para_confirmed.classList.add("p02");

        var elem_deaths = document.querySelector('#loading2');
        elem_deaths.parentNode.removeChild(elem_deaths);
        var element_deaths = document.getElementById("div2");
        var child = document.getElementById("#loading2");
        element_deaths.insertBefore(para_deaths, child);  
        para_deaths.classList.add("p02");

        var para_atualizacao = document.createElement("p");
        var node_atualizacao = document.createTextNode("Atualizado em " + day);
        var linebreak = document.createElement("br");
        var node_atualizacao2 = document.createTextNode("(atualizado 1 vez por dia)");
        var link_corona = document.createElement("a");
        link_corona.setAttribute("href", "https://www.who.int/emergencies/diseases/novel-coronavirus-2019/situation-reports/");
        link_corona.setAttribute("target", "blank");
        link_corona.appendChild(node_atualizacao);
        link_corona.appendChild(linebreak);
        link_corona.appendChild(node_atualizacao2);
        para_atualizacao.appendChild(link_corona);
        element_deaths.insertBefore(para_atualizacao, child);
        element_deaths.insertBefore(para_atualizacao, child);

        console.log("End");
        
      })
      .catch(function (error) {
        console.log(error);
      });

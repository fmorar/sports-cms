import React from 'react'
import axios from 'axios';
import Link from 'gatsby-link'
import BonusesCta from '../components/BonusesCta'


export default class Lines extends React.Component {
componentDidMount() {

    let sportData = [[]];
    let date;
    let liga;
    let event;
    let time;

    var url = "https://allorigins.me/get?url=" + encodeURIComponent("https://www.betcris.com/apuestas-en-vivo");
	const myInit = {
		method: 'HEAD',
		mode: 'no-cors',
	};

    axios.get(url, myInit)
      .then((response) => {
        if(response.status === 200) {
          let html = response.data;
          let countInsert = 0;
          let countByDate = 0;
          console.log(html.contents);
          let result = html.contents.match(/<td>(.*?)<\/td>|<td colspan="4">(.*?)<\/td>/g).map(function(val, index){
            let filterData = val.replace(/<\/?td>|<\/?td colspan="4">/g,'');           
              if (filterData.match(/2018|2019|2020/g)) {
                countByDate = 0;
                date = filterData;
              }
              if (countByDate === 1) {
                liga = filterData;
                countInsert++;
              }
              if (filterData.match(/vs|at |Vs./g)) {
                event = filterData.toLowerCase();
                countInsert++;
              }
              if (filterData.match(/ AM | PM | a. m.| p. m./g)) {
                time = filterData;
                countInsert++;
              }
              if (countInsert === 3) {
                sportData.push({
                  date:date,
                  liga:liga,
                  event:event,
                  time:time
                });                
                countInsert = 0;   
              }
              if(countByDate === 4){
                  countByDate=0;
                }
              countByDate++;
          });
          function buildTable(data) {
            var table = document.createElement("table");
            table.className="table";
            var thead = document.createElement("thead");
            var tbody = document.createElement("tbody");
            var headRow = document.createElement("tr");
            ["Dia","Liga","Evento","Hora"].forEach(function(el) {
              var th=document.createElement("th");
              var abbr=document.createElement("abbr");
              abbr.appendChild(document.createTextNode(el));
              th.appendChild(abbr);
              headRow.appendChild(th);
            });
            thead.appendChild(headRow);
            table.appendChild(thead); 
            data.forEach(function(el) {
              var tr = document.createElement("tr");
              for (var o in el) {  
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(el[o]))
                tr.appendChild(td);
              }
              tbody.appendChild(tr);  
            });
            table.appendChild(tbody);             
            return table;
          }
          document.getElementById("table").appendChild(buildTable(sportData));
        }
      }, (error) => {
        console.log("Humm: ", error);
      });
  }
  render() {
    return (
			<div className="bets-page"> 
				<div className="section-title bets--hero">
					<h2 className="title title__main is-size-3 has-text-weight-bold is-bold-light text-center">Proximos juegos</h2>
				</div>
				<div className="section">
					<div className="container">
						<div id="table"></div>
					</div>
				</div>
				<BonusesCta/>
			</div>
    )
  }
}
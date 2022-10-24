import {Serie} from './serie.js';
import {dataSeries} from './data.js';

let seriesTbody: HTMLElement = document.getElementById("series")!;
const seasonAverage: HTMLElement = document.getElementById("averageSeasons")!;
seasonAverage.innerHTML = `${getAverageSeasons(dataSeries)}`
renderSeriesInTable(dataSeries);
function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach((serie) => {
      let trElement = document.createElement("tr");
        trElement.innerHTML = `<td class="table-active">${serie.id}</td>
                             <td class="table-active"><a href=${serie.url}>${serie.name}</a></td>
                             <td class="table-active">${serie.channel}</td>
                             <td class="table-active">${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement);
    });
  }
function getAverageSeasons(series: Serie[]): string {
let totalSeasons: number = 0;
let totalSeries: number = series.length
series.forEach((serie) => totalSeasons += serie.seasons);
let average = totalSeasons/totalSeries
let result = "Seasons average: " +average.toString()
return result;
}
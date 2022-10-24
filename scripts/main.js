import { dataSeries } from './data.js';
var seriesTbody = document.getElementById("series");
var seasonAverage = document.getElementById("averageSeasons");
seasonAverage.innerHTML = "".concat(getAverageSeasons(dataSeries));
renderSeriesInTable(dataSeries);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td class=\"table-active\">".concat(serie.id, "</td>\n                             <td class=\"table-active\"><a href=").concat(serie.url, ">").concat(serie.name, "</a></td>\n                             <td class=\"table-active\">").concat(serie.channel, "</td>\n                             <td class=\"table-active\">").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    var totalSeries = series.length;
    series.forEach(function (serie) { return totalSeasons += serie.seasons; });
    var average = totalSeasons / totalSeries;
    var result = "Seasons average: " + average.toString();
    return result;
}

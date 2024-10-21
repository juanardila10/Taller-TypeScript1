import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series');
var averageSeasons = document.getElementById('avg-seasons');
renderSeriesInTable(dataSeries);
averageSeasons.innerHTML = "".concat(getAverageSeasons(dataSeries));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = " <td>".concat(serie.id, "</td>\n                                <td>").concat(serie.name, "</td>\n                                <td>").concat(serie.channel, "</td> \n                                <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    var totalSeries = series.length;
    series.forEach(function (serie) { return totalSeasons += serie.seasons; });
    var average = Math.round(totalSeasons / totalSeries);
    return 'Seasons average: ' + average;
}

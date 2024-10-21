import { Serie } from './serie.js';
import { dataSeries } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let averageSeasons: HTMLElement = document.getElementById('avg-seasons')!; 


renderSeriesInTable(dataSeries);

averageSeasons.innerHTML = `${getAverageSeasons(dataSeries)}`

function renderSeriesInTable(series: Serie[]): void{
    console.log('Desplegando series')
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = ` <td>${serie.id}</td>
                                <td>${serie.name}</td>
                                <td>${serie.channel}</td> 
                                <td>${serie.seasons}</td>`;
        seriesTbody.appendChild(trElement)
    
    });
}

function getAverageSeasons(series: Serie[]): string{
    let totalSeasons: number = 0;
    let totalSeries : number = series.length
    series.forEach((serie) => totalSeasons += serie.seasons)
    let average : number = Math.round(totalSeasons / totalSeries)
    return 'Seasons average: '+average
}
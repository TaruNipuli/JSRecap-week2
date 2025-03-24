/**
 * 
 * @param {number[]} alkupiste geoJSON point-koordinaatit
 * @param {number[]} loppupiste geoJSON point-koordinaatit
 * @returns etäisyys kahden pisteen välillä
 */

export function distance(alkupiste, loppupiste) {
    return Math.sqrt((loppupiste[0] - alkupiste[0])**2 + (loppupiste[1] - alkupiste[1])**2);
}

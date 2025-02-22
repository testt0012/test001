function calculateClips() {
    let tileWidth = parseFloat(document.getElementById("tileWidth").value) || 0;
    let tileLength = parseFloat(document.getElementById("tileLength").value) || 0;
    let area = parseFloat(document.getElementById("area").value) || 0;

    tileWidth = tileWidth / 1000;
    tileLength = tileLength / 1000;

    if (tileWidth <= 0 || tileLength <= 0 || area <= 0) {
        document.getElementById("result").innerText = "Please select tile sizes and enter a positive area!";
        return;
    }

    let tileArea = tileWidth * tileLength;
    let totalTiles = Math.ceil(area / tileArea);
    let totalClips = totalTiles;
    let bufferClips = Math.ceil(totalClips * 0.1);
    let recommendedClips = totalClips + bufferClips;

    document.getElementById("result").innerText = 
        "You need " + totalClips + " clips.\n" +
        "With 10% buffer: " + recommendedClips + " clips.";
}
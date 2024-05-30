const container = document.querySelector("#container");


for(let row =1; row <= 25; row++){
    const rowElement = document.createElement("div");
    rowElement.className = `sdafw`;

    for(let col = 1; col <= 26; col++){
        const cellElement = document.createElement("div");
        cellElement.className = `col`;
        
        //col.setAttribute("contenEditable", "true")
        cellElement.contentEditable = "true";

        rowElement.appendChild(cellElement);
     
    }
    container.append(rowElement);
}
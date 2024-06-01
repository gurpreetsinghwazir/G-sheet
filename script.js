const container = document.querySelector("#container");

function columnIndexToLetter(index){
    return String.fromCharCode(64 + index);
}

const columnHeadRow = document.createElement("div");
for(let i = 0; i <= 26; i++){
    const headCell = document.createElement("div");
    headCell.className = `col`;
    if(i > 0){
        headCell.textContent = columnIndexToLetter(i);
    }
    else{
        headCell.textContent = "00"
    }
    
    columnHeadRow.append(headCell);
}
container.append(columnHeadRow);




for(let row =1; row <= 26; row++){
    const rowElement = document.createElement("div");
    
    const rowHeader  = document.createElement("div");
    rowHeader.className = `col`;
    rowHeader.textContent = `${row}`;
    rowElement.append(rowHeader);
    

    for(let col = 1; col <= 26; col++){
        const cellElement = document.createElement("div");
        cellElement.className = `col`;
              
        //col.setAttribute("contenEditable", "true")
        cellElement.contentEditable = "true";
        cellElement.innerHTML = `${col} ${row}`;
         rowElement.append(cellElement);
     
    }
    container.append(rowElement);
}
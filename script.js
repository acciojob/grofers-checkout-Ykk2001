const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
let priceAll=document.querySelectorAll('.price')
console.log(priceAll);

	//
	let total=0;
	priceAll.forEach((cell)=>{
		 total=total+parseFloat(cell.textContent)
	})
	
	// Create a new row for the total
    const table = document.getElementById("groceryTable");
    const totalRow = document.createElement("tr");
    totalRow.classList.add("total-row");

	const totalCell = document.createElement("td");
    totalCell.setAttribute("colspan", "2");
    totalCell.textContent = "Total Price: " + total;

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
  
};

getSumBtn.addEventListener("click", getSum);


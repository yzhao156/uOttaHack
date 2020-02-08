function setTable(area) {
    var myTable = document.getElementById("table");
    for (i = 0; i < area.length; i++) { 
        var myRow = document.createElement("tr");
        // var num = document.createElement("td");
        var city = document.createElement("td");
        var confirmed = document.createElement("td");
        var suspected = document.createElement("td");
        var curied = document.createElement("td");
        var death = document.createElement("td");
        var iconfirmed = document.createElement("td");
        var isuspected = document.createElement("td");
        var icuried = document.createElement("td");
        var ideath = document.createElement("td");
        // num.innerHTML = i;
        city.innerHTML = area[i].provinceShortName;
        confirmed.innerHTML = area[i].confirmedCount;
        suspected.innerHTML = area[i].suspectedCount;
        curied.innerHTML = area[i].curedCount;
        death.innerHTML = area[i].deadCount;
        iconfirmed.innerHTML = area[i].yesterdayIncreased.confirmedCount;
        isuspected.innerHTML = -area[i].yesterdayIncreased.suspectedCount;
        icuried.innerHTML = area[i].yesterdayIncreased.curedCount;
        ideath.innerHTML = area[i].yesterdayIncreased.deadCount;
        // myRow.appendChild(num);
        myRow.appendChild(city);
        myRow.appendChild(confirmed);
        myRow.appendChild(suspected);
        myRow.appendChild(curied);
        myRow.appendChild(death);
        myRow.appendChild(iconfirmed);
        myRow.appendChild(isuspected);
        myRow.appendChild(icuried);
        myRow.appendChild(ideath);
        myTable.appendChild(myRow);
    };
}


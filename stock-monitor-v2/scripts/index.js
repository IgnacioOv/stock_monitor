import data from "../data.json" assert { type: "json" };

function logData(from,to) {
  console.log(data);
    
  for (var i = from; i<to; i++) {
    var row = `<tr>
                  <td>${i}</td>
                  <td>${data[i].Date}</td>
                  <td>${data[i].ADBE}</td>
                  <td>${data[i].AAPL}</td>
                  <td>${data[i].AMD}</td>
                  <td>${data[i].AMZN}</td>
                  <td>${data[i].ASML}</td>
                  <td>${data[i].AVGO}</td>
                  <td>${data[i].CMCSA}</td>
                  <td>${data[i].CSCO}</td>
                  <td>${data[i].EBAY}</td>
                  <td>${data[i].GOOG}</td>
                  <td>${data[i].GOOGL}</td>
                  <td>${data[i].HSIC}</td>
                  <td>${data[i].INTC}</td>
                  <td>${data[i].MSFT}</td>
                  <td>${data[i].PYPL}</td>
                  <td>${data[i].VRSK}</td>
              </tr>`;
    var table = $("#table");
    table.append(row);
  }
}

logData(0,data.length);

$("#activateFilter").click(function(){
  var from = $("#from").val();
  from = parseInt(from)
  var to = $("#to").val();
  to = parseInt(to)
  $( "#table" ).load( "index.html #table" );
  setTimeout(function(){
    logData(from,to)
  },1000)
      
  });

  

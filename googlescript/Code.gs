function doGet(e){

 // Change Spread Sheet url
 var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1cuCNiy_PVD5cU2I2UUZN9QM_nUMY7KLPA6YEwCy8LkE/edit?gid=0#gid=0");

// Sheet Name, Chnage Sheet1 to Users in Spread Sheet. Or any other name as you wish
 var sheet = ss.getSheetByName("Sheet1");
  
 return getData(sheet); 
  
}


function getData(sheet){
  var jo = {};
  var dataArray = [];

// collecting data from 2nd Row , 1st column to last row and last column
  var rows = sheet.getRange(2,1,sheet.getLastRow()-1, sheet.getLastColumn()).getValues();
  
  for(var i = 0, l= rows.length; i<l ; i++){
    var dataRow = rows[i];
    var record = {};
    record['ProductName'] = dataRow[0];
    record['Price'] = dataRow[1];
    record['Stock'] = dataRow[2];
    record['Date'] = dataRow[3];
    
    dataArray.push(record);
    
  }  
  
  jo = dataArray;
  
  var result = JSON.stringify(jo);
  
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
  
}  

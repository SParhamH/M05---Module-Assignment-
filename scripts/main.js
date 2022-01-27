var x = prompt("Enter you number:");          // Unit of table
var operator = 'multiplication';              // Type of calculation
var i = 1;                                    // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';    // Message
if (operator === 'multiplication') {  		
  	while (i < 11) {
    msg += i + ' x ' + Number(x) + ' = ' + (i * Number(x)) + '<br />';
    i++;
 	 	}
}

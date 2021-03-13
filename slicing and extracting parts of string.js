var total_len = 140;
var char = prompt("Compose your tweet");
// var remain_char=total_len - (char.length);
var sliced_char=char.slice(0,141)
alert("you have written"+char.length+" "+sliced_char);

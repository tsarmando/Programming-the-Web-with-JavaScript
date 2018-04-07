$(":button").click(alll)
var current = "", prev = "", operation = "", result ="";
/*    triggers = {
 
	plus: $(":button#addButton").trigger("click"),
	subtract: $(":button#subtractButton").trigger("click"),
	multiply: $(":button#multiplyButton").trigger("click"),
	divide: $(":button#divideButton").trigger("click")
}*/

function alll(){
var clicked = $(this).html();
if(Number(clicked) == clicked){
	if(current == "")
		current = clicked;
	else current += clicked;
//$(":input#display").html(current);
$("input[name=display]").val(current)
}
else if(clicked == "+"){
	if(prev == ""){
	prev = current;
	current = "";
//	$(":input#display").html(prev);
	$("input[name=display]").val(prev)
		}
	else{
		if(current != ""){
			result = (Number(current) + Number(prev)).toString();	      
			prev = result;
			current = ""
//			$(":input#display").html(prev);
			$("input[name=display]").val(prev)
		}
	}

	operation = "plus"
}

else if(clicked == "*"){
	if(prev == ""){
	prev = current;
	current = "";
	$("input[name=display]").val(prev);
		}
	else{
		if(current != ""){
			result = (Number(current) * Number(prev)).toString();	      
			prev = result;
			current = ""
			$("input[name=display]").val(prev);
		}
	}

	operation = "multiply"
}
else if(clicked == "/"){
	if(prev == ""){
	prev = current;
	current = "";
	$(":input#display").html(prev);
		}
	else{
		if(current != ""){
			result = (Number(current) / Number(prev)).toString();	      
			prev = result;
			current = ""
			$(":input#display").html(prev);
		}
	}

	operation = "divide"
}
else if(clicked == "-"){
	if(prev == ""){
	prev = current;
	current = "";
	$(":input#display").html(prev);
		}
	else{
		if(current != ""){
			result = (Number(current) - Number(prev)).toString();	      
			prev = result;
			current = ""
			$(":input#display").html(prev);
		}
	}
operation = "subtract"
}
else if(clicked == "="){
	if(prev != "") {
		 if(operation == "plus")      $(":button#addButton").trigger("click")
		 if(operation == "subtract")  $(":button#subtractButton").trigger("click")
		 if(operation == "multiply")  $(":button#multiplyButton").trigger("click")
		 if(operation == "divide")    $(":button#divideButton").trigger("click")
			 operation = ""
	}
	else $(":input#display").html(prev);
}
else if(clicked == "C"){ 
	current = "";
	prev = "";
	result = 0;
	operation = null;

}
//$(":input#display").html(current);

}


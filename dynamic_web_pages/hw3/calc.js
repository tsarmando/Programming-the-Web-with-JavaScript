$(":button").click(all)
var current = "", prev = "", operation = "", result ="",
    notate = $(":button#divideButton").html()

function all(){
var clicked = $(this).html();
if(Number(clicked) == clicked){
	if(current == "")
		current = clicked;
	else current += clicked;
	$("input[name=display]").val(current);
}
else if(clicked == "+"){
	if(prev == ""){
	prev = current;
	current = "";
	$(":input#display").val(prev);
		}
	else{
		if(current != ""){
			result = (Number(current) + Number(prev)).toString();	      
			prev = result;
			current = ""
			$("input[name=display]").val(prev);
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
else if(clicked == notate){ 
	if(prev == ""){
	prev = current;
	current = "";
	$("input[name=display]").val(prev);
		}
	else{
		if(current != ""){
			result = (Number(prev) / Number(current)).toString();	      
			prev = result;
			current = ""
			$("input[name=display]").val(prev);
		}
	}

	operation = "divide"
}
else if(clicked == "-"){
	if(prev == ""){
	prev = current;
	current = "";
	$("input[name=display]").val(prev);
		}
	else{
		if(current != ""){
			result = (Number(prev) - Number(current)).toString();	      
			prev = result;
			current = ""
			$("input[name=display]").val(prev);
		}
	}
operation = "subtract"
}
else if(clicked == "="){
	if(prev != "" && current!= "") {
		 if(operation == "plus")      $(":button#addButton").trigger("click")
		 if(operation == "subtract")  $(":button#subtractButton").trigger("click")
		 if(operation == "multiply")  $(":button#multiplyButton").trigger("click")
		 if(operation == "divide")    $(":button#divideButton").trigger("click")
        // prev = ""
	}
	else $("input[name=display]").val(prev);
}
else if(clicked == "C"){ 
	current = "";
	prev = "";
	result = 0;
	operation = null;
	$("input[name=display]").val(current)

}
//$(":input#display").html(current);

}

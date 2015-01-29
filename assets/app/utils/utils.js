
function directive_template(directive)
{
	if(directive.indexOf(".htm") > 0){
		return "app/directives/" + directive;
	}else{
		return "app/directives/" + directive + ".htm";
	}
}


var AngularApp = "ThemeApp";


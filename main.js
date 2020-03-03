$("body").on("click", "#man", function (e) {
	e.preventDefault();

	const url = $("#man").data("image");
	// this means this will always be the image, that's never going to change,
	// although -beware- you can change the actual image that is the source
	// url (like 'x' or 'y') is the variable here. when you put url in the code,
	// it's like saying the variable here will always be 'man.data image...'

	console.log(url);
	// this somehow lets you test that the function is firing and that you are correctly
	// capturing the 'url' they way you want it.  you should see 'img/man.jpg' in the
	// console log

	$("img").attr("src", url);
	// on the image tag, you ware targeting the src attribute.  by giving it the
	// second parameterthe 'url' variable, you are telling it to actually use the 'url'
	// the attribute you want to target always comes first, the value you want to use always comes 2nd
	//  attribute is a -method- i think
});

$("body").on("click", "#baby", function (e) {
	e.preventDefault();

	const url = $("#baby").data("image");

	console.log(url);

	$("img").attr("src", url);

});
// so all of the above is the 'long' way, not the way you want to do it!!! it's not DRY.
// bc if you need to make a change later, you'll have to go back and change the little code in every
// single cloned/copied part.
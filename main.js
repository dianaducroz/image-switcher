$("body").on("click", ".my-button", function (e) {
	e.preventDefault();

	console.log(e);

	const this_button = e.target;

	// replaced ""#man" with "".my-button" means that you can set a const for the button
	// .my-button is the class attribute (?) for the button tag in HTML.
	// so every time somebody clicks on the target, checks to see whether the class is my-button
	// and if it is, then it fires the function, but if you hvae more than one element on the page
	// with the my-button class, then it doesn't know which to show.  this is where 'this-button'
	// comes in, it allows you to enter the id for that specific button/target.

	const url = $(this_button).data("image");

	// replace #man with this_button but w NO QUOTES, because it is or is not a variable.

	console.log(url);

	$("img").attr("src", url);

});
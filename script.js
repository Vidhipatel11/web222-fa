const reviews = [
	{
		name: "John Smith",
		comment: "Great service and friendly staff! Highly recommend.",
		rating: 4
	},
	{
		name: "Jane Doe",
		comment: "The food was amazing! Best restaurant in town.",
		rating: 5
	},
	{
		name: "Bob Johnson",
		comment: "Average food and slow service.",
		rating: 2
	}
];

function addReview(review) {
	const reviewsList = document.getElementById("reviews-list");
	const li = document.createElement("li");
	const name = document.createElement("p");
	const comment = document.createElement("p");
	const rating = document.createElement("p");
	name.textContent = review.name;
	li.appendChild(name);
	comment.textContent = review.comment;
	li.appendChild(comment);
	rating.textContent = "Rating: " + review.rating + "/5";
	li.appendChild(rating);
	reviewsList.appendChild(li);
}

for (let i = 0; i < reviews.length; i++) {
	addReview(reviews[i]);
}

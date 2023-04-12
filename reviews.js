// Get review data from data.js
const reviewData = window.reviewData;

// Function to generate a review card
function generateReviewCard(review) {
  // Create card div element
  const card = document.createElement('div');
  card.classList.add('card');

  // Create card header with name and date
  const header = document.createElement('div');
  header.classList.add('card-header');
  header.innerHTML = `<h4>${review.name}</h4><p>${review.date}</p>`;
  card.appendChild(header);

  // Create card body with rating and text
  const body = document.createElement('div');
  body.classList.add('card-body');
  body.innerHTML = `<p class="rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</p><p>${review.text}</p>`;
  card.appendChild(body);

  return card;
}

// Function to generate all review cards
function generateReviewCards() {
  const reviewsContainer = document.querySelector('#reviews-container');

  // Remove any existing review cards
  while (reviewsContainer.firstChild) {
    reviewsContainer.removeChild(reviewsContainer.firstChild);
  }

  // Generate new review cards
  for (const review of reviewData) {
    const card = generateReviewCard(review);
    reviewsContainer.appendChild(card);
  }
}

// Add event listener to form submit button
const submitBtn = document.querySelector('#submit-review');
submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form from submitting

  // Get form input values
  const nameInput = document.querySelector('#name');
  const dateInput = document.querySelector('#date');
  const ratingInput = document.querySelector('#rating');
  const textInput = document.querySelector('#text');

  // Create new review object and add to reviewData array
  const newReview = {
    name: nameInput.value,
    date: dateInput.value,
    rating: parseInt(ratingInput.value),
    text: textInput.value,
  };
  reviewData.push(newReview);

  // Reset form input values
  nameInput.value = '';
  dateInput.value = '';
  ratingInput.value = '1';
  textInput.value = '';

  // Generate new review cards
  generateReviewCards();
});

// Generate initial review cards
generateReviewCards();

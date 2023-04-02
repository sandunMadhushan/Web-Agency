new Vue({
  el: "#customer-reviews",
  data: {
    reviews: [
      {
        name: "Dimantha Weerakoon",
        comment:
          "Very satisfied about the team of developers. They fullfill my expectations well…",
        rating: 5,
      },
      {
        name: "Imalka Shehan",
        comment: "I am satisfied with the quality.",
        rating: 5,
      },
      {
        name: "Pasindu",
        comment:
          "Team Helped me lot to grow my bussiness. Higherly Recomended.…",
        rating: 5,
      },
      {
        name: "Ishan Bandara",
        comment: "The web was okay, but the customer service was great.",
        rating: 3,
      },
      {
        name: "Nimantha Dilshan",
        comment: "Super & Fast Service. Thanks.",
        rating: 5,
      },
    ],
    newReview: { name: "", comment: "", rating: "" },
  },
  computed: {
    featuredReviews: function () {
      return this.reviews.slice(0, 2);
    },
    remainingReviews: function () {
      return this.reviews.slice(2);
    },
  },

  methods: {
    addReview: function () {
      if (
        this.newReview.name &&
        this.newReview.comment &&
        this.newReview.rating
      ) {
        this.reviews.push({
          name: this.newReview.name,
          comment: this.newReview.comment,
          rating: this.newReview.rating,
        });
        this.newReview.name = "";
        this.newReview.comment = "";
        this.newReview.rating = "";
      } else {
        alert("Please fill out all fields.");
      }
    },
  },
});

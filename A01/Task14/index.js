var guests = [
    {
        name: "Albert Einstein",
        message: "I would be honored if you could join me for dinner. Your contributions to science and philosophy have greatly impacted the world, and I would love to learn from your wisdom and insights.",
    },
    {
        name: "Oprah Winfrey",
        message: "I am a big admirer of your work and your incredible impact on media and culture. It would be a dream come true to have the opportunity to share a meal with you and hear about your experiences and perspectives.",
    },
    {
        name: "Malala Yousafzai",
        message: "your courage and dedication to education and human rights have been an inspiration to millions. I would be honored if you could join me for dinner and share your thoughts on how we can continue to make a positive impact in the world.",
    },
];
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest.name, ", \n").concat(guest.message, "\nSincerely, \nUsama Qazi\n"));
});

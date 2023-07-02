export function getMotivationalPictures() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockResponse = [
        "images/motivational-pictures/mountain.jpeg",
        "images/motivational-pictures/darts.jpeg",
        "images/motivational-pictures/passion.jpeg",
      ];
      resolve(mockResponse);
    }, 700);
  });
}

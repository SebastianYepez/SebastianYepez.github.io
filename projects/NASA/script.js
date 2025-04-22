// NASA javascript

/* 
  Tell us about your project below!👇

  MY RESPONSE:
  From the readme, the NASA API caught my attention and I immediately
  knew I wanted to create a program that displays random images from NASA.
  Through reading the documentation, I thought I could do this using the "album"
  part of the API, but there does not seem to be any active albums hosted on their website.
  So, my next idea was to look for keywords using the "searcH" query which worked out.

  In a terminal, I did curl https://images-api.nasa.gov/search?q=apollo
  and got a response. I gave it to ChatGPT and asked it to help me parse through
  the output and find the images. That's where a good portion of the function below comes from.
  However trying to display this image was not done yet, and I couldn't just show the first one
  since then it would only ever show one image.

  So what I did is store all of the images found in the keyword in an array,
  generate a random number from 0 to the size of the array, and whenever "generate" is clicked
  display a ranom image in accordance with the keyword input by the user.

  Overall, it was very fun and I utilized my AI prompt engineering skills
  to make my image returning process easier!
*/

async function getRandomImage(query) {
  const apiUrl = `https://images-api.nasa.gov/search?q=${encodeURIComponent(
    query
  )}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const items = data.collection.items;

    if (!items || items.length === 0) {
      //   console.log(`No results found for "${query}".`);
      let mainText = document.getElementById("main-txt");
      mainText.style.color = "red";
      mainText.textContent = `No results found for "${query}".`;
      return;
    }

    // Array to store image links and text
    const imageLinks = [];
    const titles = [];

    // Extract and display image URLs
    items.forEach((item) => {
      const itemData = item.data[0]; // Metadata
      const links = item.links; // Links to media

      // Extract title and image link
      const title = itemData.title;
      const imageLink = links?.find((link) => link.rel === "preview")?.href;

      if (imageLink) {
        // console.log(`Title: ${title}`);
        // console.log(`Image: ${imageLink}`);
        // console.log("---");
        imageLinks.push(imageLink);
        titles.push(title);
      }
    });
    // Check if there are any image links
    if (imageLinks.length === 0) {
      console.log("No image links found.");
      return;
    }

    // Generate a random index and log the corresponding image link
    const randomIndex = Math.floor(Math.random() * imageLinks.length);
    // console.log(`Random Image Link: ${imageLinks[randomIndex]}`);

    // output the user sees
    let mainImg = document.getElementById("main-img");
    let mainText = document.getElementById("main-txt");
    mainImg.src = imageLinks[randomIndex];
    mainText.style.color = "black"; // in case they previously had an error
    mainText.textContent = titles[randomIndex];
  } catch (error) {
    console.error("Error fetching images:", error);
  }
}

// Example Usage

function getImage() {
  const query = document.getElementById("query-input").value.trim();
  if (query) {
    getRandomImage(query);
  } else {
    let mainText = document.getElementById("main-txt");
    mainText.style.color = "red";
    mainText.textContent = "Please enter a query.";
  }
}

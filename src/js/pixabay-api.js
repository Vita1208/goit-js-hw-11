'use strict';
export async function fetchImages(searchData) {
  const searchParams = new URLSearchParams({
    key: "43838744-76530a55bebff011fa4d493be",
    q: searchData,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true"
  });

const url = `https://pixabay.com/api/?${searchParams.toString()}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch images. Status: ${response.status}`);
  }

  return response.json();
}                                             

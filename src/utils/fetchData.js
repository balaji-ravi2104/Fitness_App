export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '904076ab16msh2b0110a88199e15p1868fdjsn632d8b0cc564',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'cd082d1ba7msh63735bf3a0d2612p16eca0jsn68c67dc1aa0d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};

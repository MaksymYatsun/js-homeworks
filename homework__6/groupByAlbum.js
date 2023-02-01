function groupByAlbum(obj) {
  const result = [];

  for (let key of obj) {
    if (!result[key.album?.title]) {
      if (key.album !== null) {
        result[key.album?.title] = [];
      }
    }

    if (key.album !== null) {
      result[key.album?.title].push(key);
    }
  }

  return result;
}

console.log(groupByAlbum(
  [
    {
      id: 1,
      title: 'Know Yourself',
      artist: 'Drake',
      album: {
        id: 1,
        title: 'IYRTITL',
      },
    },
    {
      id: 2,
      title: 'One Dance',
      artist: 'Drake',
      album: {
        id: 2,
        title: 'Views',
      },
    },
    {
      id: 3,
      title: 'Trophies',
      artist: 'Drake',
      album: null,
    },
    {
      id: 4,
      title: 'Rich Flex',
      artist: 'Drake',
      album: {
        id: 3,
        title: 'Her Loss',
      },
    },
    {
      id: 5,
      title: 'U With Me?',
      artist: 'Drake',
      album: {
        id: 2,
        title: 'Views',
      },
    },
    {
      id: 6,
      title: 'Company',
      artist: 'Drake',
      album: {
        id: 1,
        title: 'IYRTITL',
      }
    }
  ]
));

//5.  Given an array of songs, group them by album title (return an object where keys are album titles and values are arrays of songs).
let story = 'Last weekend, I took literally the most beautifull hike of \
my life. The trail is called "The High Peak Loop" and \
it stretches all the way from Lake Placid to Mount Marcy, \
New York. It’s really an adventure from beginning to end! \
It is a 15-mile trek, and it literally took me an entire day. \
I stopped at Mirror Lake to take some artsy photos. \
It was a short stop, though,\
because I had a freaking steep climb ahead. \
After a quick break at the scenic Adirondack Lodge,\
I began my ascent up the rocky path. \
The summit is a breathtaking 5,344 feet high! \
I was already exhausted by the time I reached the h\
alfway point. \
Two hours later, I arrived at Indian Falls, \
an extremely beautifull cascade hidden in the forest.\
Something that surprised me was that near the end,\
 you literally loop back to the starting point! \
 At this stage, you’re very close to finishing.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// Paso 1
// console.log(storyWords);

// paso 3 & 4
let count = 0;
storyWords.forEach(word => {
  count++;
});
console.log('Word Count:', count);

// paso 5 & 6
storyWords = storyWords.filter(word => word !== unnecessaryWord);

// paso7
storyWords = storyWords.map(word => {
  if (word === misspelledWord) {
    return 'beautiful';
  } else {
    return word;
  }
});

// paso 8
let badWordIndex = storyWords.findIndex(word => word === badWord);
console.log('Index of bad word:', badWordIndex);

// paso 9
if (badWordIndex !== -1) { 
  storyWords[badWordIndex] = 'really';
}


// paso 10
let lengthCheck = storyWords.every(word => word.length <= 10);
console.log('Are all words 10 characters or less?', lengthCheck);

// paso 11
if (!lengthCheck) {
  storyWords = storyWords.map(word => {
    if (word.length > 10) {
      if (word === 'breathtaking') return 'stunning';
      if (word === 'stretches') return 'extends';
      if (word === 'adventure') return 'journey';
      if (word === 'exhausted') return 'tired';
      if (word === 'description') return 'detail'; 
      if (word === 'beginning') return 'start';
      if (word === 'finishing.') return 'ending.';
    }
    return word;
  });
}

// paso 2
console.log(storyWords.join(' '));
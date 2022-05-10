//calls the dog image api and returns a random dog image
async function getDogUrl() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const message = await response.json();
  const url = message["message"];
  return url;
}

async function getSpecificDog(breed) {
  const fetchURL = "https://dog.ceo/api/breed/" + breed + "/images/random";
  const response = await fetch(fetchURL);
  if (response.ok) {
    const message = await response.json();
    const url = message["message"];
    return url;
  } else {
    getDogUrl();
  }
}

module.exports = { getDogUrl, getSpecificDog };

const dogList = [
  "affenpinscher",
  "african",
  "airedale",
  "akita",
  "appenzeller",
  "australian/shepherd",
  "basenji",
  "beagle",
  "bluetick",
  "borzoi",
  "bouvier",
  "boxer",
  "brabancon",
  "briard",
  "buhund/norwegian",
  "bulldog/boston",
  "bulldog/english",
  "bulldog/french",
  "bullterrier/staffordshire",
  "cattledog/australian",
  "chihuahua",
  "chow",
  "clumber",
  "cockapoo",
  "collie/border",
  "coonhound",
  "corgi/cardigan",
  "cotondetulear",
  "dachshund",
  "dalmatian",
  "dane/great",
  "deerhound/scottish",
  "dhole",
  "dingo",
  "doberman",
  "elkhound/norwegian",
  "entlebucher",
  "eskimo",
  "finnish/lapphund",
  "frise/bichon",
  "germanshepherd",
  "greyhound/italian",
  "groenendael",
  "havanese",
  "hound/afghan",
  "hound/basset",
  "hound/blood",
  "hound/english",
  "hound/ibizan",
  "hound/plott",
  "hound/walker",
  "husky",
  "keeshond",
  "kelpie",
  "komondor",
  "kuvasz",
  "labradoodle",
  "labrador",
  "leonberg",
  "lhasa",
  "malamute",
  "malinois",
  "maltese",
  "mastiff/bull",
  "mastiff/english",
  "mastiff/tibetan",
  "mexicanhairless",
  "mix",
  "mountain/bernese",
  "mountain/swiss",
  "newfoundland",
  "otterhound",
  "ovcharka/caucasian",
  "papillon",
  "pekinese",
  "pembroke",
  "pinscher/miniature",
  "pitbull",
  "pointer/german",
  "pointer/germanlonghair",
  "pomeranian",
  "poodle/miniature",
  "poodle/standard",
  "poodle/toy",
  "pug",
  "puggle",
  "pyrenees",
  "redbone",
  "retriever/chesapeake",
  "retriever/curly",
  "retriever/flatcoated",
  "retriever/golden",
  "ridgeback/rhodesian",
  "rottweiler",
  "saluki",
  "samoyed",
  "schipperke",
  "schnauzer/giant",
  "schnauzer/miniature",
  "setter/english",
  "setter/gordon",
  "setter/irish",
  "sheepdog/english",
  "sheepdog/shetland",
  "shiba",
  "shihtzu",
  "spaniel/blenheim",
  "spaniel/brittany",
  "spaniel/cocker",
  "spaniel/irish",
  "spaniel/japanese",
  "spaniel/sussex",
  "spaniel/welsh",
  "springer/english",
  "stbernard",
  "terrier/american",
  "terrier/australian",
  "terrier/bedlington",
  "terrier/border",
  "terrier/cairn",
  "terrier/dandie",
  "terrier/fox",
  "terrier/irish",
  "terrier/kerryblue",
  "terrier/lakeland",
  "terrier/norfolk",
  "terrier/norwich",
  "terrier/patterdale",
  "terrier/russell",
  "terrier/scottish",
  "terrier/sealyham",
  "terrier/silky",
  "terrier/tibetan",
  "terrier/toy",
  "terrier/welsh",
  "terrier/westhighland",
  "terrier/wheaten",
  "terrier/yorkshire",
  "tervuren",
  "vizsla",
  "waterdog/spanish",
  "weimaraner",
  "whippet",
  "wolfhound/irish",
];

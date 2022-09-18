const innertTextConvet = (innerTextElement) => {
  const element = document.getElementById(innerTextElement);
  const elementString = element.innerText;
  const elementNumber = parseFloat(elementString);
  return elementNumber;
};

const displayResult = (id, vlaue) => {
  const currentId = document.getElementById(id);
  currentId.innerText = vlaue;
};

const allElement = (ele) => {
  const element = document.querySelectorAll(ele);

  for (item of element) {
    // item.innerText = totalCOunt;
    console.log(item);
    return item;
  }
};

// const abc = allElement("#total-card-count");
// console.log(abc);

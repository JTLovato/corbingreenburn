const holders = [
  {
    element: document.getElementById("design_holder"),
    openClass: "design_open",
    closedClass: "design_closed",
  },
  {
    element: document.getElementById("website_holder"),
    openClass: "website_open",
    closedClass: "website_closed",
  },
  {
    element: document.getElementById("contact_holder"),
    openClass: "contact_open",
    closedClass: "contact_closed",
  },
  {
    element: document.getElementById("about_holder"),
    openClass: "about_open",
    closedClass: "about_closed",
  },
];

const title_box_1 = document.getElementById("photo_title_holder_1");
const title_box_2 = document.getElementById("photo_title_holder_2");
const title_box_3 = document.getElementById("photo_title_holder_3");
const title_box_4 = document.getElementById("photo_title_holder_4");

function closeAllDivs() {
  holders.forEach(({ element, openClass, closedClass }) => {
    if (element.classList.contains(openClass)) {
      element.classList.remove(openClass);
      element.classList.add(closedClass);
    }
  });
}

function toggleHolder(index) {
  const { element, openClass, closedClass } = holders[index];
  if (element.classList.contains(openClass)) {
    element.classList.remove(openClass);
    element.classList.add(closedClass);
  } else {
    closeAllDivs();
    element.classList.remove(closedClass);
    element.classList.add(openClass);
  }
}

function moveLeft() {
  toggleHolder(0);
}
function moveRight() {
  toggleHolder(1);
}
function moveUp() {
  toggleHolder(2);
}
function moveDown() {
  toggleHolder(3);
}
function moveCenter() {
  closeAllDivs();
}

//
//
//THIS IS WHERE THE PHOTO CLICKY WILL GO
//
//
const location_box = document.getElementById("moving_box_1");
const portrait_box = document.getElementById("moving_box_2");
const music_box = document.getElementById("moving_box_3");
const cosplay_box = document.getElementById("moving_box_4");

const boxes = [
  {
    el: cosplay_box,
    rightClasses: ["right_side_1", "right_side_2", "right_side_3"],
  },
  {
    el: location_box,
    rightClasses: ["right_side_1", "right_side_2", "right_side_3"],
  },
  {
    el: portrait_box,
    rightClasses: ["right_side_1", "right_side_2", "right_side_3"],
  },
  {
    el: music_box,
    rightClasses: ["right_side_1", "right_side_2", "right_side_3"],
  },
];

function handleBoxClick(clickedIndex) {
  const clicked = boxes[clickedIndex];
  const isLeft = clicked.el.classList.contains("left_side");

  boxes.forEach((box, i) => {
    box.el.classList.remove("left_side", "open_photos", ...box.rightClasses);
  });

  if (!isLeft) {
    clicked.el.classList.add("left_side", "open_photos");
    let rightIndex = 1;
    boxes.forEach((box, i) => {
      if (i !== clickedIndex) {
        box.el.classList.add(`right_side_${rightIndex}`);
        rightIndex++;
      }
    });
  }
}

boxes.forEach((box, i) => {
  box.el.addEventListener("click", function () {
    console.log("Box was clicked!");
    handleBoxClick(i);
  });
});
//
//
//THIS IS WHERE THE PHOTO CLICKY ENDS
//
//

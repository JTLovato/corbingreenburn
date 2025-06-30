const holderNames = ["design", "website", "contact", "about"];
const holders = holderNames.map((name) => ({
  element: document.getElementById(`${name}_holder`),
  openClass: `${name}_open`,
  closedClass: `${name}_closed`,
}));

const title_boxes = [1, 2, 3, 4].map((i) =>
  document.getElementById(`photo_title_holder_${i}`)
);

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

const [moveLeft, moveRight, moveUp, moveDown] = [0, 1, 2, 3].map(
  (i) => () => toggleHolder(i)
);
const moveCenter = closeAllDivs;

// Photo Clicky
const boxIds = ["moving_box_4", "moving_box_1", "moving_box_2", "moving_box_3"];
const rightClasses = ["right_side_1", "right_side_2", "right_side_3"];
const boxes = boxIds.map((id) => ({
  el: document.getElementById(id),
  rightClasses,
}));

function handleBoxClick(clickedIndex) {
  const clicked = boxes[clickedIndex];
  const isLeft = clicked.el.classList.contains("left_side");

  boxes.forEach((box) =>
    box.el.classList.remove("left_side", "open_photos", ...box.rightClasses)
  );

  if (!isLeft) {
    clicked.el.classList.add("left_side", "open_photos");
    let rightIndex = 1;
    boxes.forEach((box, i) => {
      if (i !== clickedIndex)
        box.el.classList.add(`right_side_${rightIndex++}`);
    });
  }
}

boxes.forEach((box, i) =>
  box.el.addEventListener("click", () => handleBoxClick(i))
);

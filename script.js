document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.querySelector(".grid-container");
    const redButton = document.getElementById("redButton");
    const blueButton = document.getElementById("blueButton");
    const greenButton = document.getElementById("greenButton");
    const resetButton = document.getElementById("resetButton");

    const colors = {
        red: "red",
        blue: "blue",
        green: "green",
    };

    let currentColor = colors.red; 

    function createGrid() {
        for (let i = 0; i < 25; i++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridContainer.appendChild(gridItem);
        }
    }

    function setColor(color) {
        currentColor = color;
    }

    function resetGrid() {
        const gridItems = document.querySelectorAll(".grid-item");
        gridItems.forEach(gridItem => {
            gridItem.style.backgroundColor = "white";
        });
        currentColor = colors.red;
    }

    createGrid();

    redButton.addEventListener("click", function () {
        setColor(colors.red);
    });

    blueButton.addEventListener("click", function () {
        setColor(colors.blue);
    });

    greenButton.addEventListener("click", function () {
        setColor(colors.green);
    });

    resetButton.addEventListener("click", function () {
        resetGrid();
    });

    gridContainer.addEventListener("click", function (event) {
        const clickedGridItem = event.target;
        clickedGridItem.style.backgroundColor = currentColor;
    });
});
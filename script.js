const flexDirection = document.getElementById('flex-direction');
const justifyContent = document.getElementById('justify-content');
const alignItems = document.getElementById('align-items');
const flexContainer = document.getElementById('flex-container');

function updateFlex() {
    flexContainer.style.flexDirection = flexDirection.value;
    flexContainer.style.justifyContent = justifyContent.value;
    flexContainer.style.alignItems = alignItems.value;
}

flexDirection.addEventListener('change', updateFlex);
justifyContent.addEventListener('change', updateFlex);
alignItems.addEventListener('change', updateFlex);

updateFlex(); // Call initially to apply default values

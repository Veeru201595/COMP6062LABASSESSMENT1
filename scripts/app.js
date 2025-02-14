const studentName = "Veerendra Yarlagadda";

const studentNumber = "1151438";

console.log(`${studentName} - ${studentNumber}`);

const headerContent = document.querySelector('h1');

headerContent.innerHTML = `${studentName} - ${studentNumber}`;

headerContent.classList.add('headingPrimary');


    const name = data.USERNAME;
    const message = data.MESSAGE;
    let p = document.createElement("p");
    p.innerText = `${name}: ${message}`;
      allMessages.appendChild(p);
}
// Set database "childadded" event listener here
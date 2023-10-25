fetch("data/Data.sidebar.json")
  .then((response) => response.json())
  .then((data) => {
    const peopleList = document.getElementById("mobile-links");
    const fragment = document.createDocumentFragment();

    data.sidebar.forEach((person) => {
      const listItem = document.createElement("li");
      const anchor = document.createElement("a");
      anchor.textContent = person.title;
      anchor.href = person.routeTo;

      listItem.appendChild(anchor);
      fragment.appendChild(listItem);

      //   listItem.textContent = `${person.title} - ${person.routeTo}`;
      peopleList.appendChild(fragment);
    });
  });

const friends = [
  // Remplace les noms ci-dessous par ceux de tes amis.
  // Tu pourras ensuite ajouter une photo de présentation avec image: "./photos/zamis/nom.jpg".
  { name: "Ami 1", image: "" },
  { name: "Ami 2", image: "" },
  { name: "Ami 3", image: "" },
  { name: "Ami 4", image: "" },
  { name: "Ami 5", image: "" },
  { name: "Ami 6", image: "" }
];

const gallery = document.getElementById("friends-gallery");

friends.forEach((friend, index) => {
  const card = document.createElement("a");
  card.className = `friend-card${friend.image ? " has-image" : ""}`;
  card.href = `#ami-${index + 1}`;
  card.innerHTML = `
    <div class="friend-card-image">
      ${friend.image ? `<img src="${friend.image}" alt="Photo de ${friend.name}">` : ""}
      ${friend.image ? "" : '<span class="friend-placeholder">Photo à ajouter</span>'}
      <span class="friend-number">${String(index + 1).padStart(2, "0")}</span>
    </div>
    <h2>${friend.name}</h2>
    <p>Voir les souvenirs →</p>
  `;
  gallery.appendChild(card);
});

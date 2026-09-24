const expressions = [
  {
    expression: "2 flaps",
    meaning: "Notre nom à nous : une petite équipe improbable, tendre et toujours prête à partir à l'aventure."
  },
  {
    expression: "Les zamis",
    meaning: "Les personnes, les rencontres et la tribu qui rendent nos histoires encore plus belles."
  },
  {
    expression: "Un petit pap",
    meaning: "Un mot doux, un geste ou une attention qui dit beaucoup sans avoir besoin de grandes phrases."
  },
  {
    expression: "Je suis une sorte de flaps",
    meaning: "Une façon très sérieuse de ne pas se prendre au sérieux — et de se reconnaître immédiatement."
  },
  {
    expression: "Ça part dans tous les sens",
    meaning: "Notre quotidien, nos discussions et nos idées quand la routine décide de prendre des vacances."
  },
  {
    expression: "Mode analyse activé",
    meaning: "Le moment où une conversation devient une enquête complète, avec hypothèses, détails et conclusions."
  },
  {
    expression: "Un voyage dans le voyage",
    meaning: "Quand le trajet, l'attente ou même un détour devient finalement un souvenir à part entière."
  },
  {
    expression: "Les petits détails",
    meaning: "Tout ce qui semble minuscule mais qui, au fond, compose la plus grande partie de notre histoire."
  }
];

const list = document.getElementById("words-list");
const search = document.getElementById("words-search");
const count = document.getElementById("words-count");

function renderExpressions(query = "") {
  const normalizedQuery = query.trim().toLocaleLowerCase("fr");
  const visibleExpressions = expressions.filter((item) =>
    `${item.expression} ${item.meaning}`.toLocaleLowerCase("fr").includes(normalizedQuery)
  );

  count.textContent = `${visibleExpressions.length} expression${visibleExpressions.length > 1 ? "s" : ""}`;

  if (!visibleExpressions.length) {
    list.innerHTML = '<p class="word-empty">Aucune expression trouvée… mais elle finira peut-être par être inventée.</p>';
    return;
  }

  list.innerHTML = visibleExpressions
    .map(
      (item, index) => `
        <article class="word-card">
          <span class="word-number">${String(index + 1).padStart(2, "0")}</span>
          <h2>${item.expression}</h2>
          <p>${item.meaning}</p>
        </article>
      `
    )
    .join("");
}

search.addEventListener("input", (event) => renderExpressions(event.target.value));
renderExpressions();

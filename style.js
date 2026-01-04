window.MathJax = {
  startup: {
    typeset: false,
  },
  output: {
    displayOverflow: "linebreak",
    linebreaks: {
      width: "80%",
    },
  },
};

window.onload = async () => {
  console.log(window.MathJax)
  document.querySelectorAll("img").forEach((img) => {
    const wrapped = document.createElement("div");
    wrapped.classList.add("image-wrapper");
    const newImg = document.createElement("img");
    newImg.src = img.src;
    newImg.alt = img.alt;
    wrapped.appendChild(newImg);
    img.replaceWith(wrapped);
  });
  const content = document.createElement("div");
  content.classList.add("content");
  let cls = null;
  document.querySelectorAll("body > :not(h1)").forEach((child) => {
    child.remove();
    if (child.textContent.startsWith("::: ")) {
      cls = child.textContent.slice(4).trim();
      return;
    }
    if (cls) {
      child.className = cls;
      cls = null;
      console.log(child);
    }
    content.appendChild(child);
  });
  document.body.appendChild(content);
  document.documentElement.style.setProperty(
    "--header",
    JSON.stringify(document.querySelector("h1").textContent)
  );
  const main = document.createElement("main")
  document.querySelectorAll("body > *").forEach((child) => {
    child.remove();
    main.appendChild(child);
  });
  document.body.appendChild(main);
  await window.MathJax.typesetPromise([main]);
  console.log("done");
};

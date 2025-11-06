// ☕ Café com Códigos - Efeito de enchimento em sequência (mantendo estrutura original)
document.addEventListener("DOMContentLoaded", () => {
  console.log("☕ Café com Códigos carregado com sucesso!");

  const cards = document.querySelectorAll(".coffee-card");
  const reloadBtn = document.getElementById("reloadAnimation");

  function startAnimation() {
    cards.forEach(card => {
      const layers = card.querySelectorAll(".coffee-layer");

      // Resetar camadas imediatamente (sem transição)
      layers.forEach(layer => {
        layer.style.transition = "none";
        layer.style.height = "0";
      });

      // Forçar reflow para garantir reset (para navegadores)
      // eslint-disable-next-line
      void card.offsetWidth;

      // Iniciar sequência de enchimento
      layers.forEach((layer, index) => {
        const finalHeight = layer.getAttribute("data-height") || "0%";
        setTimeout(() => {
          layer.style.transition = "height 1.1s ease-out";
          layer.style.height = finalHeight;
        }, index * 600);
      });
    });
  }

  // Executa ao carregar
  startAnimation();

  // Recarregar animação ao clicar no botão
  if (reloadBtn) {
    reloadBtn.addEventListener("click", () => {
      console.log("🔄 Recarregando animação...");
      startAnimation();
    });
  }

  // Interação ao clicar na carta (mantido)
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("ativo");
      const nameEl = card.querySelector(".coffee-name");
      if (nameEl) console.log(`Selecionado: ${nameEl.textContent}`);
    });
  });
});

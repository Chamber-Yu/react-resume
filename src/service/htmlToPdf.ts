export interface PdfParams {
  name?: string;
  isOnePage?: boolean;
  onAfterPrint?: () => void;
}

export function getPdf({ name, isOnePage, onAfterPrint }: PdfParams = {}) {
  const viewer = document.querySelector(".rs-view") as HTMLElement | null;
  if (!viewer || !viewer.textContent?.trim()) {
    return false;
  }

  const previousTitle = document.title;
  const printStyle = document.createElement("style");
  printStyle.id = "rs-print-options";
  if (isOnePage) {
    const heightMm = Math.ceil(viewer.scrollHeight * 25.4 / 96);
    printStyle.textContent = `@media print { @page { size: 210mm ${heightMm}mm; margin: 0; } }`;
  }

  document.title = name?.trim() || "木及简历";
  document.documentElement.classList.add("rs-printing");
  if (isOnePage) {
    document.head.appendChild(printStyle);
  }

  let cleaned = false;
  const cleanup = () => {
    if (cleaned) return;
    cleaned = true;
    window.removeEventListener("afterprint", cleanup);
    window.clearTimeout(fallbackTimer);
    document.documentElement.classList.remove("rs-printing");
    printStyle.remove();
    document.title = previousTitle;
    onAfterPrint?.();
  };
  const fallbackTimer = window.setTimeout(cleanup, 120000);
  window.addEventListener("afterprint", cleanup, { once: true });

  try {
    window.print();
  } catch (error) {
    cleanup();
    throw error;
  }
  return true;
}

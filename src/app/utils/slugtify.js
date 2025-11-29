export function slugtify(text) {
    return text
      .toString()
      .toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // quitar acentos
      .replace(/[^a-z0-9]+/g, "-") // reemplazar no válidos por -
      .replace(/^-+|-+$/g, "") // quitar guiones extra
      .trim();
  }
  
export const addDep = (FC, _FC, modules) => {
  if (FC) {
    if (
      (modules.getName && modules.getType) ||
      (modules.name && modules.type)
    ) {
      FC.addDep(modules);
    } else {
      modules(FC);
    }
  } else {
    modules(_FC);
  }
};

export const api = async () => {
  const url =
    "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.json";
  const resp = await fetch(url);
  const departamento = await resp.json();
  return departamento;
};

export const city = async (data) => {
  const url =
    "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.json";
  const resp = await fetch(url);
  const departamento = await resp.json();
  const ciudad = departamento.filter((el) => el.departamento === data);
  return ciudad;
};

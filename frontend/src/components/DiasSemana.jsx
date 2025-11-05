export default function DiasSemana() {
  const dias = [
    { nome: "SEG", data: "04/11" },
    { nome: "TER", data: "05/11" },
    { nome: "QUA", data: "06/11" },
    { nome: "QUI", data: "07/11" },
    { nome: "SEX", data: "08/11" },
    { nome: "SAB", data: "09/11" },
    { nome: "DOM", data: "10/11" },
  ];

  return (
    <div className="dias">
      <ul>
        {dias.map((d, i) => (
          <li key={i}>
            <a href="#">
              {d.nome}
              <br />
              {d.data}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

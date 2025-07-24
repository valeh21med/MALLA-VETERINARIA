const malla = [
  {
    semestre: 1,
    cursos: [
      { codigo: "001", nombre: "Química Inorgánica", requisitos: [] },
      { codigo: "002", nombre: "Informática", requisitos: [] },
      { codigo: "003", nombre: "Matemática", requisitos: [] },
      { codigo: "004", nombre: "Historia", requisitos: [] },
      { codigo: "005", nombre: "Desarrollo", requisitos: [] },
      { codigo: "006", nombre: "Biología", requisitos: [] },
      { codigo: "007", nombre: "PTB", requisitos: [] },
    ]
  },
  {
    semestre: 2,
    cursos: [
      { codigo: "008", nombre: "Química Orgánica", requisitos: ["001"] },
      { codigo: "009", nombre: "Bioestadística", requisitos: ["002", "003"] },
      { codigo: "010", nombre: "Economía", requisitos: ["003"] },
      { codigo: "011", nombre: "Física", requisitos: ["003"] },
      { codigo: "012", nombre: "Bioética", requisitos: ["004", "005"] },
      { codigo: "013", nombre: "Zoología", requisitos: ["006"] },
      { codigo: "014", nombre: "Ecología", requisitos: ["004", "006"] },
    ]
  },
  {
    semestre: 3,
    cursos: [
      { codigo: "015", nombre: "Bioquímica I", requisitos: ["008"] },
      { codigo: "016", nombre: "Embriología", requisitos: ["013"] },
      { codigo: "017", nombre: "Histología I", requisitos: ["013"] },
      { codigo: "018", nombre: "Anatomía I", requisitos: ["013"] },
      { codigo: "019", nombre: "Mercadeo", requisitos: ["010"] },
      { codigo: "020", nombre: "Sistemas", requisitos: ["007", "010"] },
      { codigo: "021", nombre: "PTS I", requisitos: ["007"] },
    ]
  },
  {
    semestre: 4,
    cursos: [
      { codigo: "022", nombre: "Bioquímica II", requisitos: ["015"] },
      { codigo: "023", nombre: "Genética", requisitos: ["013", "015"] },
      { codigo: "024", nombre: "Histología II", requisitos: ["017"] },
      { codigo: "025", nombre: "Anatomía II", requisitos: ["018"] },
      { codigo: "026", nombre: "Fisiología I", requisitos: ["011", "015"] },
      { codigo: "027", nombre: "Gestión", requisitos: ["019"] },
      { codigo: "028", nombre: "Etología", requisitos: ["020"] },
      { codigo: "029", nombre: "PTS II", requisitos: ["021"] },
    ]
  },
  {
    semestre: 5,
    cursos: [
      { codigo: "030", nombre: "Epidemiología", requisitos: ["009"] },
      { codigo: "031", nombre: "Microbiología I", requisitos: ["013", "022"] },
      { codigo: "032", nombre: "Patología I", requisitos: ["024", "026"] },
      { codigo: "033", nombre: "Nutrición I", requisitos: ["022", "026"] },
      { codigo: "034", nombre: "Fisiología II", requisitos: ["026"] },
      { codigo: "035", nombre: "Semiología", requisitos: ["025", "026"] },
      { codigo: "036", nombre: "Zootecnología I", requisitos: ["026"] },
      { codigo: "037", nombre: "PTS III", requisitos: ["029"] },
    ]
  },
  {
    semestre: 6,
    cursos: [
      { codigo: "038", nombre: "Farmacología I", requisitos: ["022", "034"] },
      { codigo: "039", nombre: "Microbiología II", requisitos: ["031"] },
      { codigo: "040", nombre: "Patología II", requisitos: ["025", "032"] },
      { codigo: "041", nombre: "Nutrición II", requisitos: ["033"] },
      { codigo: "042", nombre: "Parasitología I", requisitos: ["030", "032"] },
      { codigo: "043", nombre: "Biotecnología", requisitos: ["036"] },
      { codigo: "044", nombre: "Zootecnología II", requisitos: ["036"] },
      { codigo: "045", nombre: "PTS IV", requisitos: ["037"] },
    ]
  },
  {
    semestre: 7,
    cursos: [
      { codigo: "046", nombre: "Farmacología II", requisitos: ["038"] },
      { codigo: "047", nombre: "Enfermedades", requisitos: ["030", "040"] },
      { codigo: "048", nombre: "Inmunología", requisitos: ["039"] },
      { codigo: "049", nombre: "Cirugía I", requisitos: ["025", "038"] },
      { codigo: "050", nombre: "Parasitología II", requisitos: ["042"] },
      { codigo: "051", nombre: "Métodos Diagnósticos I", requisitos: ["022", "040"] },
      { codigo: "052", nombre: "Medicina Interna I", requisitos: ["049"] },
      { codigo: "053", nombre: "PTS V", requisitos: ["045"] },
    ]
  },
  {
    semestre: 8,
    cursos: [
      { codigo: "054", nombre: "Normativa", requisitos: ["005"] },
      { codigo: "055", nombre: "Metodología", requisitos: ["012", "030"] },
      { codigo: "056", nombre: "Inocuidad", requisitos: ["047"] },
      { codigo: "057", nombre: "Cirugía II", requisitos: ["049"] },
      { codigo: "058", nombre: "Anestesia y analgesia", requisitos: ["046"] },
      { codigo: "059", nombre: "Métodos Diagnósticos II", requisitos: ["051"] },
      { codigo: "060", nombre: "Medicina Interna II", requisitos: ["052"] },
      { codigo: "061", nombre: "Avicultura", requisitos: ["020", "053"] },
    ]
  },
  {
    semestre: 9,
    cursos: [
      { codigo: "062", nombre: "Salud Pública", requisitos: ["001","002","003","004","005","006","007","008","009","010","011","012","013","014","015","016","017","018","019","020","021","022","023","024","025","026","027","028","029","030","031","032","033","034","035","036","037","038","039","040","041","042","043","044","045","046","047","048","049","050","051","052","053","054","055","056","057","058","059","060","061"] },
      { codigo: "063", nombre: "Medicina de Conservación", requisitos: ["001","002","003","004","005","006","007","008","009","010","011","012","013","014","015","016","017","018","019","020","021","022","023","024","025","026","027","028","029","030","031","032","033","034","035","036","037","038","039","040","041","042","043","044","045","046","047","048","049","050","051","052","053","054","055","056","057","058","059","060","061"] },
      { codigo: "064", nombre: "Clínica de Especies Menores", requisitos: ["001","002","003","004","005","006","007","008","009","010","011","012","013","014","015","016","017","018","019","020","021","022","023","024","025","026","027","028","029","030","031","032","033","034","035","036","037","038","039","040","041","042","043","044","045","046","047","048","049","050","051","052","053","054","055","056","057","058","059","060","061"] },
    ]
  },
  {
    semestre: 10,
    cursos: [
      { codigo: "065", nombre: "Trabajo de Graduación I", requisitos: ["062","063","064"] },
      { codigo: "066", nombre: "One Health", requisitos: ["062","063","064"] },
      { codigo: "067", nombre: "Clínica de Especies Mayores", requisitos: ["062","063","064"] },
    ]
  },
  {
    semestre: 11,
    cursos: [
      { codigo: "068", nombre: "Práctica Profesional", requisitos: ["065","066","067"] },
      { codigo: "069", nombre: "Trabajo de Graduación II", requisitos: ["065","066","067"] },
    ]
  }
];

const estadoCursos = {};

function renderMalla() {
  const contenedor = document.getElementById("semestres");
  malla.forEach((semestre) => {
    const div = document.createElement("div");
    div.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${semestre.semestre}`;
    div.appendChild(titulo);

    semestre.cursos.forEach((curso) => {
      const label = document.createElement("label");
      label.className = "curso";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = curso.codigo;
      checkbox.disabled = curso.requisitos.length > 0;

      checkbox.addEventListener("change", () => {
        estadoCursos[curso.codigo] = checkbox.checked;
        actualizarMalla();
      });

      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(`${curso.codigo} - ${curso.nombre}`));
      div.appendChild(label);
    });

    contenedor.appendChild(div);
  });
}

function actualizarMalla() {
  malla.forEach((semestre) => {
    semestre.cursos.forEach((curso) => {
      const checkbox = document.getElementById(curso.codigo);
      const requisitosCumplidos = curso.requisitos.every((cod) => estadoCursos[cod]);
      if (!estadoCursos[curso.codigo]) {
        checkbox.disabled = !requisitosCumplidos;
      }
    });
  });
}

renderMalla();


document.addEventListener("DOMContentLoaded", function () {
    const sheetId = "2PACX-1vRhT4Aeotku1_0OcOirDBCRhEjcsyEf2cu-R-i6TnTzgkBMAnch6y23BkgNOwEmXRd3ztNjqA7Zkopv";
    const gid = "793240086";
    const url = `https://docs.google.com/spreadsheets/d/e/${sheetId}/pub?gid=${gid}&single=true&output=csv`;

    fetch(url)
        .then(response => response.text())
        .then(data => {
            const rows = data.split("\n").slice(1); // Skip header
            const tbody = document.querySelector("#agenda-body");
            tbody.innerHTML = ""; // Clear existing manual content

            rows.forEach(row => {
                const cols = row.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/); // Split by comma handling quotes
                if (cols.length < 3) return;

                const fecha = cols[1].trim();
                const tema = cols[2].trim().replace(/^"|"$/g, ''); // Remove quotes if present

                // Filter for "Actividad", "Examen", or "Parcial" in the Topic column
                if (tema.includes("Actividad") || tema.includes("Examen") || tema.includes("Parcial")) {
                    console.log("Adding agenda item:", date, tema);
                    const tr = document.createElement("tr");
                    tr.innerHTML = `<td>${fecha}</td><td>${tema}</td>`;
                    tbody.appendChild(tr);
                }
            });
        })
        .catch(error => console.error("Error loading agenda:", error));
});

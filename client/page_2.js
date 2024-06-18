async function getDoktors() {
    const getDoktors = await fetch("http://localhost:8080/doktors");
    const data = await getDoktors.json()
    insertList(data);
}
getDoktors()

function insertList(doctors) {
    const doctorsList = document.getElementById('doctors-list');
    doctorsList.innerHTML = '';
    doctors.forEach((doctor, index) => {
        const listItem = document.createElement('li');
        listItem.style.opacity = '0';
        listItem.style.transition = 'opacity 0.3s ease';
    
        setTimeout(() => {
          listItem.style.opacity = '1';
        }, 100 * index);
        listItem.innerHTML = `
                        <h2>${doctor.name}</h2>
                        <p>תחום התמחות: ${doctor.specialization}</p>
                        <p>עיר: ${doctor.city}</p>  `;
        doctorsList.appendChild(listItem);
    });
}

document.getElementById('form').addEventListener('submit' , filterDocters )


async function filterDocters(event) {
  event.preventDefault();

  let select_region = document.getElementById('select_region').value;
  let select_field = document.getElementById('select_field').value;
  console.log(select_region, select_field);

    const res = await fetch(' http://localhost:8080/doctors/by-city-and-specialization', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ select_region:select_region,select_field: select_field})
    })
    const data = await res.json()
    insertList(data);
}
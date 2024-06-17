async function getDoktors(){
    const getDoktors= await fetch("http://localhost:8080/doktors");
    const data = await getDoktors.json()
    console.log(data);
    const doctorsList = document.getElementById('doctors-list');
                data.forEach(doctor => {
                    const listItem = document.createElement('li');
                    listItem.innerHTML = `
                        <h2>${doctor.name}</h2>
                        <p>תחום התמחות: ${doctor.specialization}</p>
                        <p>עיר: ${doctor.city}</p>

                      
                    `;
                    doctorsList.appendChild(listItem);
                });

}
getDoktors()



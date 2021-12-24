const team = document.querySelector('.service-item-container');

devs.map( data => {
     team.innerHTML += `
     <div class="team-wrap">
                    <div class="team-imaage">
                         <img src="${data.image}" alt="">
                    </div>
                    <h2>${data.name}</h2>
                    <p class="skill">${ data.skill}</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, rerum.</p>
               </div>
     
     
`;

});


const studentList = document.querySelector('.body');

student.map( data => {
     studentList.innerHTML += `

     <tr class="tabledata">
     <th scope="row">${data.Roll}</th>
     <td>${data.name}</td>
     <td>${data.location}</td>
     <td>${data.class}</td>
     <td>${data.grade}</td>
     </tr>
     
     
     `
});








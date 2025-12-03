students = [
    { id: 1, name: 'abc', place: 'calicut' },
    { id: 2, name: 'def', place: 'tirur' },
    { id: 3, name: 'ghi', place: 'mangalam' },
    { id: 4, name: 'jkl', place: 'thrissur' },
    { id: 5, name: 'mno', place: 'ezhur' },
]

data=``
students.forEach((stud)=>{
    data += `
            <tr>
                <td>${stud.id}</td>
                <td>${stud.name}</td>
                <td>${stud.place}</td>
            </tr>
    `
    console.log(data);

}) 

document.getElementById("tbody").innerHTML=data
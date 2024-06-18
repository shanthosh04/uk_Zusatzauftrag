const people = [
    {
        firstname: "Shanthosh",
        lastname: "Sivasenthinathan",
        age:  19,
        year: 2004
    },
    {
        firstname: "Tim",
        lastname: "Feld",
        age:  24,
        year: 2000
    },
    {
        firstname: "Thomas",
        lastname: "Kross",
        age:  17,
        year: 2007
    },
    {
        firstname: "Florain",
        lastname: "Rickli",
        age:  18,
        year: 2006
    },
    {
        firstname: "Martin",
        lastname: "Scheuer",
        age:  10,
        year: 2014
    },
]

const tableBody = document.querySelector("#people-table tbody")

people.forEach(person => {
    const tr = document.createElement('tr')

    Object.values(person).forEach(value => {
        const td = document.createElement('td')
        td.textContent = value
        tr.appendChild(td)
    })

    tableBody.appendChild(tr)
})
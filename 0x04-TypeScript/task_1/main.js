var student1 = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 25,
    location: 'zion'
};
var student2 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 27,
    location: 'Shiganshina'
};
var studentsList = [student1, student2];
var myStudents = function (studentsList) {
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    var headers = ['First Name', 'Location'];
    headers.forEach(function (headerText) {
        var th = document.createElement('th'); // Corrected <tbody> to <th> for headers
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    var tbody = document.createElement('tbody');
    studentsList.forEach(function (student) {
        var row = document.createElement('tr');
        var nameID = document.createElement('td');
        nameID.textContent = student.firstName;
        row.appendChild(nameID);
        var locationID = document.createElement('td');
        locationID.textContent = student.location;
        row.appendChild(locationID);
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    document.body.appendChild(table);
};
myStudents(studentsList);
// Example of usage
var teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false
};

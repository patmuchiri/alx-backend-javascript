interface Student {
        firstName: string;
        lastName: string;
        age: number;
        location: string;
};

const student1: Student = {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 25,
        location: 'zion',
};

const student2: Student = {
        firstName: 'John',
        lastName: 'Doe',
        age: 27,
        location: 'Shiganshina',
};

const studentsList: Array<Student> = [student1, student2];

const myStudents = (studentsList: Array<Student>) => {
        const table = document.createElement('table');

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        const headers = ['First Name', 'Location'];
        headers.forEach(headerText => {
                const th = document.createElement('tbody');
                th.textContent = headerText;
                headerRow.appendChild(th);
        });

        thead.appendChild(headerRow)
        table.appendChild(thead);

        const tbody = document.createElement('tbody');

        const row = document.createElement('tr');

        const nameID = document.createElement('td');
        row.appendChild(nameID);

        const locationID = document.createElement('td');
        locationID.textContent = student.location;
        row.appendChild(locationID);

        tbody.appendChild(row);
     });

     table.appendChild(tbody);
     document.body.appendChild(table);

};

myStudents(studentsList);

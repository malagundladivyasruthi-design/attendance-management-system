let students = [];

// Add Student
function addStudent() {

    let name = document.getElementById("studentName").value;
    let roll = document.getElementById("rollNumber").value;

    if (name === "" || roll === "") {
        alert("Please enter student name and roll number.");
        return;
    }

    let student = {
        name: name,
        roll: roll,
        present: 0,
        absent: 0
    };

    students.push(student);

    document.getElementById("studentName").value = "";
    document.getElementById("rollNumber").value = "";

    displayStudents();
}


// Display Students
function displayStudents() {

    let table = document.getElementById("studentTable");

    table.innerHTML = "";

    students.forEach((student, index) => {

        let total = student.present + student.absent;

        let percentage = 0;

        if (total > 0) {
            percentage = (student.present / total) * 100;
        }

        table.innerHTML += `
            <tr>

                <td>${student.roll}</td>

                <td>${student.name}</td>

                <td>
                    ${student.present}
                </td>

                <td>
                    ${student.absent}
                </td>

                <td>
                    ${total}
                </td>

                <td>
                    ${percentage.toFixed(2)}%
                </td>

                <td>

                    <button
                        class="present-btn"
                        onclick="markPresent(${index})">
                        Present
                    </button>

                    <button
                        class="absent-btn"
                        onclick="markAbsent(${index})">
                        Absent
                    </button>

                    <button
                        class="delete-btn"
                        onclick="deleteStudent(${index})">
                        Delete
                    </button>

                </td>

            </tr>
        `;
    });
}


// Mark Present
function markPresent(index) {

    students[index].present++;

    displayStudents();
}


// Mark Absent
function markAbsent(index) {

    students[index].absent++;

    displayStudents();
}


// Delete Student
function deleteStudent(index) {

    students.splice(index, 1);

    displayStudents();
}
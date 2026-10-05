function Student(props) {
    return (
        <div className="card">
            <h2>Student Profile</h2>

            <hr />

            <p>
                <b>Name :</b> {props.name}
            </p>

            <p>
                <b>Roll No :</b> {props.rollNo}
            </p>

            <p>
                <b>Course :</b> {props.course}
            </p>

            <p>
                <b>College :</b> {props.college}
            </p>

            <hr />
        </div>
    );
}

export default Student;
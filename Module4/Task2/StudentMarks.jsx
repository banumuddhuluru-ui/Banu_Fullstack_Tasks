import { useState } from "react";

function StudentMarks(props) {
    const [marks, setMarks] = useState(50);

    const increaseMarks = () => {
        setMarks(marks + 1);
    };

    const decreaseMarks = () => {
        setMarks(marks - 1);
    };

    return (
        <div className="card">
            <h2>Student Marks</h2>

            <p>Student Name: {props.name}</p>

            <p>Subject: {props.subject}</p>

            <p>Marks: {marks}</p>

            <button onClick={increaseMarks}>Increase Marks</button>

            <button onClick={decreaseMarks}>Decrease Marks</button>
        </div>
    );
}

export default StudentMarks;
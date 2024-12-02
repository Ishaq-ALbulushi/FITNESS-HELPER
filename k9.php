<?php
$DATABASE_HOST = 'localhost';
$DATABASE_USER = 'root';
$DATABASE_PASS = '';
$DATABASE_NAME = 'test1';

$conn = mysqli_connect($DATABASE_HOST, $DATABASE_USER, $DATABASE_PASS, $DATABASE_NAME);

if(mysqli_connect_error()) {
    exit('Error connecting to the sign'. mysqli_connect_error());
}

if(!isset($_POST['user'], $_POST['pass'])) {
    exit('Empty Field(s)');
}

if(empty($_POST['user']) || empty($_POST['pass'])) {
    exit('Values Empty');
}

if($stmt = $conn->prepare('SELECT id, password FROM users WHERE username = ?')) {
    
    $stmt->bind_param('s', $_POST['username']);
    $stmt->execute();
    $stmt->store_result();
    
    if($stmt->num_rows>0){
        echo 'Username Already Exists. Try Again';
    }
    else {
        if($stmt = $conn->prepare('INSERT INTO users (username, password, email) VALUES (?,?,?)')) {
            $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
            $stmt->bind_param('sss' , $_POST['username'], $password, $_POST['email']);
            $stmt->execute();
            echo 'Succesfully Registered'."<br>";
        }
        else {
            echo 'Error Occurred';
        }
    }
    $stmt->close();
}
else{
    echo 'Error Occurred';
}

/* sql to insert a record
$sql = "INSERT INTO users (username, email, password)
VALUES ('John', 'john@example.com', 'fesfes')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully" . "<br>";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


// sql to view database
$sql = "SELECT id, username, email, password FROM users";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table><tr><th>ID</th><th>Name</th><th>Email</th><th>Password</th></tr>";
    
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["id"]. "</td><td>" . $row["username"]. "</td><td>" . $row["email"]. "</td><td>" . $row["password"]. "</td></tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}

// sql to delete a record
$sql = "DELETE FROM users WHERE id=3";

if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully"."<br>";
} else {
    echo "Error deleting record: " . $conn->error;
}
// sql to update a record
$sql = "UPDATE users SET username='Doe' WHERE id=2";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully"."<br>";
} else {
    echo "Error updating record: " . $conn->error;
}

// sql to search a record
$sql = "SELECT id, username, email, password FROM users WHERE username='Doe'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Username: " . $row["username"]. " -Email: " . $row["email"]. " - Password: " . $row["password"]. "<br>";
    }
} else {
    echo "0 results";
}

// sql to sort or order by a record
$sql = "SELECT id, username, email, password FROM users ORDER BY username";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Username: " . $row["username"]. " -Email: " . $row["email"]. " - Password: " . $row["password"]. "<br>";
    }
} else {
    echo "0 results";
}
*/


$conn->close();
?>
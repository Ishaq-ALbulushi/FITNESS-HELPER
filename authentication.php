<?php      
    include('connection.php');  
    $username = $_POST['user'];  
 
    $password =isset($_POST["pass"]) ? $_POST['pass'] : "";
 /*
if(empty ($username)) {
     header ("Location: index.php7erro=User Name is required");
     exit();}
 else if(empty ($password)){
    header("Location: index.php?error=Password is required");
     exit();}
$sql = "SELECT * FROM h WHERE username= '$username' AND password= '$password'";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows ($result) === 1) {
    $row = mysqli_fetch_assoc($result);
     if($row[ 'username']=== $username && $row['password'] === $password){
                          
         echo "Logged In!";
         $_SESSION['username']=$row[ 'username'];
         $_SESSION['password'] = $row[ 'password'];
         $_SESSION['id'] = $row[ 'id'];
         
         header("Location: home.php");
         exit();
        }                                                                         I
      else{
         header(" User Name or Password");
         exit();
     }
    }else{
        header(" User Name or Password");
        exit();
     }*/     

        
        $username = stripcslashes($username);  
        $password = stripcslashes($password);  
        $username = mysqli_real_escape_string($con, $username);  
        $password = mysqli_real_escape_string($con, $password);  
      
        $sql = "SELECT *FROM b WHERE username = '$username'";  
        $result = mysqli_query($con, $sql);  

        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
          
        $count = mysqli_num_rows($result);  
          
        if($count == 1){  
            echo "<h1><a href='profile.html'><center> Login successful </center></a></h1> ";  
        }  
        else{  
            echo "<h1> <a href='sign in.html'>Login failed. Invalid username or password.</a></h1>";  
        }    
?>  
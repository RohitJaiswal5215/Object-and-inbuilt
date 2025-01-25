function DynamicUserRole(user) {

    output = ( user.role == "admin" )
           ? (user.active == true ? "Admin Access Granted!" : "Admin Access Revoked")
           : ( user.role == "user" ) 
           ? (user.active == true ? "User Access Granted!" : "User Access Revoked")
           : "Access Denied"

            console.log(output);
            
}


let user1 = { name: "Alice", role: "admin", active: false }
DynamicUserRole(user1)

let user2 = { name: "Bob", role: "user", active: true };
DynamicUserRole(user2)

let user3 = { name: "Bob", role: "person", active: true };
DynamicUserRole(user3)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>add user</title>
</head>
<body>
<form action="adduser" method="POST">
@csrf
    <input type="email" name="email" placeholder="email"/>
    <input type="text" name="domainName" placeholder="domainName"/>
    <input type="text" name="duration" placeholder="duration"/>
    <input type="date" name="expireDate" placeholder="expireDate"/>
    <button type="submit"> Add</button>
</form>
</body>
</html>
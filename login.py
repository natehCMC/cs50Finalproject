#!/usr/bin/env python3
import cgi
import csv

print("Content-Type: text/html\n")

form = cgi.FieldStorage()

if "username" in form and "password" in form:
    username = form["username"].value
    password = form["password"].value

    # Validate and sanitize the inputs
    username = username.strip()

    # CSV file to read user data
    csvFilePath = 'Login.csv'

    # Check if the provided credentials are valid
    with open(csvFilePath, 'r') as csvFile:
        csvReader = csv.reader(csvFile)
        for row in csvReader:
            if row[0] == username and row[1] == password:
                print("<h2>Login Successful</h2>")
                print("<p>Welcome, {}!</p>".format(username))
                break
        else:
            print("<h2>Login Failed</h2>")
            print("<p>Invalid username or password.</p>")
else:
    print("<h2>Login Failed</h2>")
    print("<p>Username and password are required.</p>")

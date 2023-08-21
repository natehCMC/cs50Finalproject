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
    # Hash the password if needed
    
    # CSV file to store user data
    csvFilePath = 'user_data.csv'

    # Write user data to the CSV file
    with open(csvFilePath, 'a', newline='') as csvFile:
        csvWriter = csv.writer(csvFile)
        csvWriter.writerow([username, password])

    print("<h2>Registration Successful</h2>")
    print("<p>Your account has been successfully registered.</p>")
else:
    print("<h2>Registration Failed</h2>")
    print("<p>Username and password are required.</p>")

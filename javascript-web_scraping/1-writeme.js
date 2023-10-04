#!/usr/bin/node
// Import the required libraries
const fs = require('fs');
const path = require('path');

// Check if the file is present
if (fs.existsSync(path.join(__dirname, 'my_file.txt'))) {
    console.log('File is present');

    // Read the file
    fs.readFile(path.join(__dirname, 'my_file.txt'), 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            // Split the file content into lines
            const lines = data.split('\n');

            // Check if the first line contains #!/usr/bin/node
            if (lines[0] === '#!/usr/bin/node') {
                console.log('First line contains #!/usr/bin/node');

                // Check if the file contains any lines that start with var
                const varLines = lines.filter(line => line.trim().startsWith('var'));

                if (varLines.length === 0) {
                    console.log('You are not allowed to use var');

                    // Process the file content
                    const text = lines.slice(1).join('\n');

                    // Print the correct output
                    console.log('Correct output - text:', text);
                } else {
                    console.log('Error: The file contains lines that start with var');
                }
            } else {
                console.log('Error: The first line does not contain #!/usr/bin/node');
            }
        }
    });
} else {
    console.log('Error: The file is not present');
}


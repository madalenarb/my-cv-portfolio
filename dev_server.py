# /// script
# dependencies = [
#     "livereload",
# ]
# ///
from livereload import Server

server = Server()

# Watch for changes in these files to reload the browser
server.watch('index.html')
server.watch('assets/css/*.css')
server.watch('assets/js/*.js')

# Serve the website on http://localhost:8000
server.serve(root='.', port=8000)
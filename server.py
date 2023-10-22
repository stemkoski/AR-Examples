import http.server

HandlerClass = http.server.SimpleHTTPRequestHandler

# Patch in the correct extensions
HandlerClass.extensions_map['.js'] = 'application/javascript'

# Run the server (like `python -m http.server` does)
http.server.test(HandlerClass, port=8337)

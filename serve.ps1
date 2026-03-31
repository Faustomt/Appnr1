$port = 8080
$root = "C:\Users\faust\.gemini\antigravity\scratch\app-nr1-psicossocial"
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Host "Servidor ouvindo em http://localhost:$port"
    Write-Host "Abrindo no navegador..."
    # Abre o navegador padrao
    Start-Process "http://localhost:$port"

    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $path = $request.Url.LocalPath
        if ($path -eq "/") { $path = "/index.html" }
        
        $localPath = Join-Path $root $path.Replace('/', '\')
        
        if (Test-Path $localPath -PathType Leaf) {
            $content = [System.IO.File]::ReadAllBytes($localPath)
            $response.ContentLength64 = $content.Length
            $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
            switch ($ext) {
                ".css" { $response.ContentType = "text/css" }
                ".js"  { $response.ContentType = "application/javascript" }
                ".html"{ $response.ContentType = "text/html; charset=utf-8" }
                default{ $response.ContentType = "application/octet-stream" }
            }
            $response.OutputStream.Write($content, 0, $content.Length)
        } else {
            $response.StatusCode = 404
            $errorMsg = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.ContentLength64 = $errorMsg.Length
            $response.OutputStream.Write($errorMsg, 0, $errorMsg.Length)
        }
        $response.Close()
    }
} catch {
    Write-Error $_
} finally {
    if ($listener.IsListening) {
        $listener.Stop()
    }
}

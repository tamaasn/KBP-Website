<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mouseover Event</title>
</head>
<body>
    <button id="hoverButton">Hover over me!</button>
    <p id="message"></p>

    <script>
        // Referensi ke elemen
        const button = document.getElementById("hoverButton");
        const paragraph = document.getElementById("message");

        // Tambahkan event listener untuk mouseover
        button.addEventListener("mouseover", function() {
            // Tampilkan pesan pada paragraf
            paragraph.textContent = "Mouseover dipanggil";
        });

        button.addEventListener("mouseout",function(){
            paragraph.textContent="";
              });
    </script>
</body>
</html>

